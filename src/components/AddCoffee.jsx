import { data } from "autoprefixer";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, quantity, supplier, taste, category, details, photo}

    console.log(newCoffee);

    // Send Data To the Server
    fetch('https://hot-coffee-store-server-rp0epgm4w.vercel.app/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success !',
          text: 'Coffee Added Successfully',
          icon: 'success',
          confirmButtonText: 'Continue'
        })
      }
    })
  }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-4xl mb-2 font-extrabold text-center">Add a Coffee</h2>
      <p className=" text-2xl text-center mb-4">We Provide one of the best Coffees in the world. It must be make you recharge and energetic </p>

      <form onSubmit={handleAddCoffee}>
        {/* Form Name and Quantity Row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group ">
              <input type="text" name="name" placeholder="Coffee Name" className="input input-border w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group ">
              <input type="text" placeholder="Available Quantity" name="quantity" className="input input-border w-full" />
            </label>
          </div>
        </div>
        {/* Form Supplier and Taste Row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group ">
              <input type="text" name="supplier" placeholder="Supplier Name" className="input input-border w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group ">
              <input type="text" placeholder="Taste" name="taste" className="input input-border w-full" />
            </label>
          </div>
        </div>
        {/* Form Category and Details Row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group ">
              <input type="text" name="category" placeholder="Category" className="input input-border w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group ">
              <input type="text" placeholder="Details" name="details" className="input input-border w-full" />
            </label>
          </div>
        </div>
        {/* Form Photo Url Row */}
        <div className=" mb-8 ">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group ">
              <input type="text" name="photo" placeholder="Photo URL" className="input input-border w-full" />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
