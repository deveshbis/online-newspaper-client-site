
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const MyPageUpdate = () => {
    const { title, publisher, description, _id } = useLoaderData()
    // console.log(newsItem);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
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
            const updateData = {
                title: data.title,
                publisher: data.publisher,
                description: data.description,
                image: res.data.data.display_url,
            };

            console.log(updateData);
            // 
            const newsRes = await axiosSecure.patch(`/userPublisher/${_id}`, updateData);
            console.log(newsRes.data)
            if (newsRes.data.modifiedCount > 0) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is Updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-10">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Articles Update: </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Title"
                                defaultValue={title}
                                {...register('title', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea {...register('description')} className="textarea textarea-bordered h-24"
                                defaultValue={description} placeholder="Description"></textarea>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Publisher</label>
                            <input id="articlepublisher" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                {...register('publisher', { required: true })}
                                defaultValue={publisher} />
                        </div>

                        <div className="form-control w-full my-6">
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default MyPageUpdate;













// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// // import useAxiosSecure from "../../Hooks/useAxiosSecure";

// // const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// // const img_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

// const MyPageUpdate = () => {

//     const { id } = useParams();
//     const [update, setUpdate] = useState({});
//     // const axiosSecure = useAxiosSecure()


//     useEffect(() => {

// fetch(`${import.meta.env.VITE_API_URL}/updateData/${id}`)
//             .then(res => res.json())
//             .then(data => {
//                 setUpdate(data)
//             })
//     }, [id])


//     const { title, description, publisher } = update;


//     const handleUpdate = (event) => {
//         event.preventDefault();

//         const form = event.target;


//         const title = form.querySelector("#artcileTitle").value;
//         const description = form.querySelector("#articleDescription").value;
//         const publisher = form.querySelector("#articlepublisher").value;


// const updateData = {
//     title,
//     description,
//     publisher,
// };



//         console.log(updateData);

//         fetch(`${import.meta.env.VITE_API_URL}/updateData/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(updateData)
//         })

//             // axiosSecure.put(`/updateData/${id}`)
//             // .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.modifiedCount > 0) {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'update successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     });

//                 }
//             });
//     }

//     return (
//         <div>
//             <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-10">
//                 <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Articles Update: {id}</h2>

//                 <form onSubmit={handleUpdate}>
//                     <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
//                         <div>
//                             <label className="text-gray-700 dark:text-gray-200" >Title</label>
//                             <input id="artcileTitle" type="text" defaultValue={title} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                         </div>

//                         <div>
//                             <label className="text-gray-700 dark:text-gray-200" >Description</label>
//                             <input id="articleDescription" type="text" defaultValue={description} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                         </div>

//                         <div>
//                             <label className="text-gray-700 dark:text-gray-200" >Publisher</label>
//                             <input id="articlepublisher" type="text" defaultValue={publisher} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                         </div>

//                         <div>
//                             <label className="text-gray-700 dark:text-gray-200" >Photo</label>
//                             <input id="passwordConfirmation" type="file" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                         </div>
//                     </div>

//                     <div className="flex justify-end mt-6">
//                         <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
//                     </div>
//                 </form>
//             </section>
//         </div>
//     );
// };

// export default MyPageUpdate;