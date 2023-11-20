import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdatedItems = () => {
  const { _id, name, category, price, recipe } = useLoaderData();

  const axiosPublic = useAxiosPublic();
  const axiosSecured = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecured.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount) {
        reset();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `${data.name} is updated to the menu!`,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    console.log("with image url", res.data);
  };
  return (
    <div>
      <SectionTitle subHeading="What's updated?" heading="Updated Items" />
      <div className="bg-white mx-10 px-5 py-4 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe name"
              {...register("name", { required: true, maxLength: 50 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-6 my-6">
            {/* category */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soups</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
                <option value="popular">Popular</option>
                <option value="offered">offered</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true, maxLength: 20 })}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true, maxLength: 500 })}
              className="textarea textarea-bordered h-24"
              defaultValue={recipe}
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full max-w-xs block my-6"
          />

          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
            Update Recipe Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatedItems;
