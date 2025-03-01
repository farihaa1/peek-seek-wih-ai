import React from "react";



const Generate = () => {
  return (
    <div className="w-full my-16">
      <h2 className="text-center font-bold text-5xl my-4">Generate An Image</h2>
      <form className="w-full flex flex-col max-w-lg my-8 mx-auto">
        <label className="text-2xl font-bold ">Email</label>
        <div className="join flex flex-col">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item w-full my-2"
          />
          <button className="btn btn-primary join-item">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default Generate;
