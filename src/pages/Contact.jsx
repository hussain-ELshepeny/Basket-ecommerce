import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    
    <div
      className="bg-white min-h-screen"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Header Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1
            className="text-4xl font-normal mb-4"
            style={{ color: "var(--color-heading)" }}
          >
            Get In Touch
          </h1>
          <p
            className="text-base leading-relaxed font-light"
            style={{ color: "var(--color-subHeading)" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
            veniam vel.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 pb-20 max-w-6xl">
        <div className="flex flex-col gap-16">
          {/* Contact Info Cards */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address Card with Hover Effect */}
              <div
                className="flex flex-col items-center bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100/50 
                           transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] cursor-pointer"
              >
                {/* React Icon */}
                <FaMapMarkerAlt
                  className="text-2xl mb-4"
                  style={{ color: "var(--color-primary)" }}
                />
                <p
                  className="font-medium text-base text-center mb-1"
                  style={{ color: "var(--color-heading)" }}
                >
                  102 Street 2714 Donovan
                </p>
                <p
                  className="text-sm font-light text-center"
                  style={{ color: "var(--color-subHeading)" }}
                >
                  Lorem ipsum dolor sit ame disconl
                </p>
              </div>

              {/* Phone Card with Hover Effect */}
              <div
                className="flex flex-col items-center bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100/50 
                           transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] cursor-pointer"
              >
                {/* React Icon */}
                <FaPhoneAlt
                  className="text-2xl mb-4"
                  style={{ color: "var(--color-primary)" }}
                />
                <p
                  className="font-medium text-base text-center mb-1"
                  style={{ color: "var(--color-heading)" }}
                >
                  +02 1234 567 88
                </p>
                <p
                  className="text-sm font-light text-center"
                  style={{ color: "var(--color-subHeading)" }}
                >
                  Lorem ipsum dolor sit ame disconl
                </p>
              </div>

              {/* Email Card with Hover Effect */}
              <div
                className="flex flex-col items-center bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100/50 
                           transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] cursor-pointer"
              >
                {/* React Icon */}
                <FaEnvelope
                  className="text-2xl mb-4"
                  style={{ color: "var(--color-primary)" }}
                />
                <p
                  className="font-medium text-base text-center mb-1"
                  style={{ color: "var(--color-heading)" }}
                >
                  info@example.com
                </p>
                <p
                  className="text-sm font-light text-center"
                  style={{ color: "var(--color-subHeading)" }}
                >
                  Lorem ipsum dolor sit ame disconl
                </p>
              </div>
            </div>
          </div>

          {/* Send Us Form Section */}
          <div className="w-full mt-8">
            <div className="bg-white p-12 rounded-lg shadow-xl shadow-gray-200/50">
              <h2
                className="text-3xl font-normal text-center mb-4"
                style={{ color: "var(--color-heading)" }}
              >
                Send Us
              </h2>
              <p
                className="text-sm text-center mb-12 max-w-xl mx-auto leading-relaxed"
                style={{ color: "var(--color-subHeading)" }}
              >
                Contact us for all your questions and opinions, or you can solve
                your problems in a shorter time with our contact offices.
              </p>
              <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--color-heading)" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:border-primary focus:ring-1 outline-none transition-colors"
                      style={{ "--tw-ring-color": "var(--color-primary)" }}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--color-heading)" }}
                    >
                      Email <span style={{ color: "var(--color-red)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:border-primary focus:ring-1 outline-none transition-colors"
                      style={{ "--tw-ring-color": "var(--color-primary)" }}
                      required
                    />
                  </div>
                </div>

                {/* Phone number Field */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:border-primary focus:ring-1 outline-none transition-colors"
                    style={{ "--tw-ring-color": "var(--color-primary)" }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Your message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:border-primary focus:ring-1 outline-none transition-colors resize-none"
                    style={{ "--tw-ring-color": "var(--color-primary)" }}
                  ></textarea>
                </div>

                {/* Submit Button in the Center */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    // Adding hover effects to the button
                    className="text-white py-3 px-8 rounded-md font-semibold transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      "--tw-ring-color": "var(--color-primary)",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
