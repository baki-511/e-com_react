import React from "react";
import { Controller, useForm } from "react-hook-form";
// import IconInfo from "./IconInfo";
// import IconMail from "./IconMail";
// import IconPhone from "./IconPhone";

import FormEl from "./FormEl";

// import IconInfo from "./IconInfo";
// import IconMail from "../icons/IconMail";
// import IconPhone from "../icons/IconPhone";
// import FormEl from "./FormEl";

const Contact_us = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div data-aos="fade-up" className="xl:container mx-auto mb-32">
        <div
          className="flex justify-center"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(254, 169, 40,1) 100%",
            height: "250px",
          }}
        >
          <h1 className="text-5xl sm:text-7xl text-white uppercase pt-12">
            Contact Us
          </h1>
        </div>
        <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto">
          <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6">
            <div className="grid grid-cols-2 gap-x-6 mb-12 mx-auto">
              {/* <IconInfo icon={<IconMail />} text="contact@us" />
            <IconInfo icon={<IconPhone />} text="+91 1234567890" /> */}
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} action="">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={(field) => (
                    <FormEl
                      type="text"
                      label="Name"
                      placeholder="Enter Name Here..."
                      fieldRef={field}
                      hasError={errors.name?.type === "required"}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={(field) => (
                    <FormEl
                      type="email"
                      label="Email"
                      placeholder="Enter Email Here..."
                      fieldRef={field}
                      hasError={errors.email?.type === "required"}
                    />
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: true }}
                  render={(field) => (
                    <FormEl
                      type="textarea"
                      label="Message"
                      placeholder="Enter message Here..."
                      fieldRef={field}
                      hasError={errors.message?.type === "required"}
                    />
                  )}
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-medium uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:outline-none focus:ring-0 active:bg-primary"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121669.17468867332!2d73.91093959360383!3d17.642498486027243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239c35891ffff%3A0x87b9ed4be241da1c!2sSatara%20Nagarparishad%20Hemlata%20Patil%20Garden!5e0!3m2!1sen!2sin!4v1724741178217!5m2!1sen!2sin"
            // width="600"
            // height="450"
            className="border-0 mx-auto md:w-[600px] md:h-[450px]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default Contact_us;
