// import { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// import Select from 'react-select';

import axios from "axios";


// const AddArticle = () => {
//   const [title, setTitle] = useState('');
//   const [image, setImage] = useState(null);
//   const [publisher, setPublisher] = useState('');
//   const [tags, setTags] = useState([]);
//   const [description, setDescription] = useState('');

// //   const history = useHistory();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Perform form validation here

//     // Construct FormData object
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('image', image);
//     formData.append('publisher', publisher);
//     formData.append('tags', JSON.stringify(tags));
//     formData.append('description', description);

//     // Example POST request using fetch
//     try {
//       const response = await fetch('/api/articles', {
//         method: 'POST',
//         body: formData,
//       });
//       if (response.ok) {
//         alert('Article added successfully!');
//         history.push('/articles'); // Redirect to articles page
//       } else {
//         const errorMessage = await response.text();
//         alert(`Failed to add article: ${errorMessage}`);
//       }
//     } catch (error) {
//       console.error('Error adding article:', error);
//       alert('Failed to add article. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h1>Add Article</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         </div>
//         <div>
//           <label>Image:</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} required />
//         </div>
//         <div>
//           <label>Publisher:</label>
//           <select value={publisher} onChange={(e) => setPublisher(e.target.value)} required>
//             {/* Render options dynamically based on available publishers */}
//             <option value="">Select Publisher</option>
//             {/* Example options */}
//             <option value="Publisher 1">Publisher 1</option>
//             <option value="Publisher 2">Publisher 2</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>
//         <div>
//           <label>Tags:</label>
//           {/* Use react-select for multi-select */}
//           <Select
//             options={[
//               { value: 'Tag1', label: 'Tag1' },
//               { value: 'Tag2', label: 'Tag2' },
//               // Add more tags as needed
//             ]}
//             isMulti
//             value={tags}
//             onChange={setTags}
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddArticle;










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











// const AddArticle = () => {

//     const handleSubmit = async e => {
//         e.preventDefault()
//         const form = e.target
//         const name = form.name.value
//         const publisher = form.publisher.value
//         const tags = form.tags.value
//         const description = form.description.value
//         const image = form.image.files[0]

//         console.log(name, publisher, tags, description);
//         console.log(image);

//         const formData = new FormData()
//         formData.append('image', image)
//         try {
//             const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`,

//                 formData
//             )

//             console.log(data);


//         }
//         catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div>
//             <div className='flex justify-center items-center min-h-screen'>
//                 <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
//                     <div className='mb-8 text-center'>
//                         <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
//                         <p className='text-sm text-gray-400'>Welcome to StayVista</p>
//                     </div>
//                     <form onSubmit={handleSubmit} className='space-y-6'>
//                         <div className='space-y-4'>
//                             <div>
//                                 <label htmlFor='email' className='block mb-2 text-sm'>
//                                     Name
//                                 </label>
//                                 <input
//                                     type='text'
//                                     name='title'
//                                     id='title'
//                                     placeholder='Enter Your Title'
//                                     className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
//                                     data-temp-mail-org='0'
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor='image' className='block mb-2 text-sm'>
//                                     Select Image:
//                                 </label>
//                                 <input
//                                     required
//                                     type='file'
//                                     id='image'
//                                     name='image'
//                                     accept='image/*'
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor='email' className='block mb-2 text-sm'>
//                                     Email address
//                                 </label>
//                                 <select className="select select-bordered w-full"
//                                     name="publisher"
//                                     id="publisher">
//                                     <option disabled value="default">Select a publisher</option>
//                                     <option value="crime">Crime</option>
//                                     <option value="sports">Sports</option>
//                                     <option value="entertainment">Entertainment</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <div className='flex justify-between'>
//                                     <label htmlFor='password' className='text-sm mb-2'>
//                                         Password
//                                     </label>
//                                 </div>

//                                 <select name='tags' id="tags"
//                                     className="select select-bordered w-full">
//                                     <option disabled value="default">Select a Tags</option>
//                                     <option value="crime">Crime</option>
//                                     <option value="sports">Sports</option>
//                                     <option value="tech">Tech</option>
//                                     <option value="travel">Travel</option>
//                                 </select>
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Description</span>
//                                 </label>
//                                 <textarea  className="textarea textarea-bordered h-24" name="description" placeholder="Description"></textarea>
//                             </div>
//                         </div>
//                         <div>
//                             <button type='submit'
//                                 className='bg-rose-500 w-full rounded-md py-3 text-white'
//                             > signup
//                             </button>
//                         </div>

//                     </form>



//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddArticle;