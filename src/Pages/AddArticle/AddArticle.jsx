import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import usePublicSecure from '../../Hooks/usePublicSecure';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddArticle = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = usePublicSecure();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = new FormData()
        imageFile.append("image", data.image[0])
        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const newsItem = {
                title: data.title,
                name: data.name,
                tags: data.tags,
                description: data.description,
                image: res.data.data.display_url
            }
            // 
            const newsRes = await axiosSecure.post('/publisher', newsItem);
            console.log(newsRes.data)
            if (newsRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register('title', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Publisher*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Publisher"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Tags*</span>
                        </label>
                        <select defaultValue="default" {...register('tags', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a Tags</option>
                            <option value="crime">Crime</option>
                            <option value="sports">Sports</option>
                            <option value="tech">Tech</option>
                            <option value="travel">Travel</option>
                        </select>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                </div>

                <div className="form-control w-full my-6">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>

                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default AddArticle;