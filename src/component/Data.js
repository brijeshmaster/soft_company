import React from "react";
import Employee from "./Employee";
// import { v4 as uuidv4 } from "uuid";

const Data = () => {
  const MyData = [
    {
      id: 1,
      name: "brij",
      role: "intern",
      img: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg",
    },

    {
      id: 2,
      name: "john",
      role: "intern",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      id: 3,
      name: "brij",
      role: "intern",
      img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg",
    },
    {
      id: 4,
      name: "john",
      role: "intern",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    },
    {
      id: 5,
      name: "brij",
      role: "intern",
      img: "https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg",
    },
    {
      id: 6,
      name: "john",
      role: "intern",
      img: "https://images.pexels.com/photos/2104185/pexels-photo-2104185.jpeg",
    },
  ];
  function updateEmployee(id, newName, newRole) {
    console.log("updateEmployee");
  }
  return (
    <div>
      <div className="flex justify-center flex-wrap object-cover h-[100%] w-[100%]">
        {MyData.map((val) => {
          return (
            <div>
              <>
                <Employee
                  key={val.id}
                  id={val.id}
                  name={val.name}
                  role={val.role}
                  img={val.img}
                  updateEmplyee={updateEmployee}
                />

                {console.log(MyData[0])}
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Data;
