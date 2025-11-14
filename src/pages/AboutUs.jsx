import heroImage from "/images/about-header.jpg.png"
import founderImage from "/images/about-people.jpg.png"

const AboutUs = () => {
  return (
    <div className="font-body">
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-5xl font-extrabold tracking-wider mb-2">
            About for Bacola
          </h1>
          <p className="text-lg font-semibold opacity-90 tracking-wider">
            WE CAN DO MORE FOR YOU
          </p>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-gray-600 mb-12">
          <p className="text-lg leading-relaxed">
            In nec purus eget neque accumsan finibus. Duis condimentum elit at
            libero commodo isculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            luctus rhoncus dapibus non ac justo. Vivamus lectuis vestibulum
            metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut la
            interdum turpis. Curabitur porta auctor quam, pretium facilisis
            nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit
            nec.
          </p>
        </div>

        {/* Main Quoted Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-heading mb-6">
            Quisque erat urna, congue et libero in eleifend euismod velit.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In nec purus eget neque accumsan finibus. Duis condimentum elit at
            libero commodo isculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            luctus rhoncus dapibus non ac justo. Vivamus lectuis vestibulum
            metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut la
            interdum turpis. Curabitur porta auctor quam, pretium facilisis
            nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit
            nec.
          </p>
        </div>

        {/* Founder Story Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-16">
          <div className="md:w-1/2 w-full">
            <div className="overflow-hidden rounded-lg">
              <img
                src={founderImage}
                alt="Rachel Leonard - Bacola CEO"
                className="w-full h-180 object-cover object-center"
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <p className="text-sm uppercase tracking-widest text-primary mb-2 font-semibold">
              Rachel Leonard - Bacola CEO
            </p>
            <h3 className="text-3xl font-bold text-heading mb-6 leading-tight">
              Duis convallis luctus pretium. Pellentesque habitant morbi
            </h3>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ouis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                mascenas accumsan luctus vel facilisis.
              </p>
              <p>
                In fermentum mi ut sapien semper, a sagittis lorem vulputate.
                Integer gravida, dui eget aliquet impera, turpis od vehicula
                ipsum, eget primis sapien tortor at rango. Cas si purulum est,
                volutpat heaps, ut at magna lei faucibus lobendum laboris.
                Integer tortor nulla, ultricies et nisi sit amet, interdum
                dictum felis. In semper lascerat dal vitae pharetra. Etiam sit
                amet molestie nulla, vel efficitur odi. Parassim rutrum ante
                justo, eget malesuada ante omnis ac. Ut dignissim blandit mauris
                eget salamnon feb invoecia nec. Vestibulum ante ipsum primis in
                fuscibus orci luctus et ultrices posaeve cablia corae; Quisque
                lobortis libero ante. Nullam in fengist erat. Aenean sed justo
                dapibus, sodales nisl ut, frimpia lorem, vestibulum in orci ac
                nisi condimentum fermentum at ei sem. Curabitur fermentum dolor
                eu lacus consectetur variis.
              </p>
              <p>
                In nec purus eget neque accumsan finibus. Duis condimentum elit
                at libero commodo isculis. Donec augue diam, tristique et
                ultricies nec, consectetur quis enim. Nullam id rutrum ex.
                Aliquam a lectus id luctus rhoncus dapibus non ac justo. Vivamus
                lectuis vestibulum metus in dapibus. Vestibulum sit amet
                sollicitudin enim. Ut la interdum turpis. Curabitur porta auctor
                quam, pretium facilisis nisl. Pellentesque efficitur elit ante,
                vel vulputate tortor blandit nec.
              </p>
            </div>
          </div>
        </div>

        {/* Final Repeating Paragraph */}
        <div className="text-gray-600">
          <p className="text-lg leading-relaxed mb-4">
            In nec purus eget neque accumsan finibus. Duis condimentum elit at
            libero commodo isculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            luctus rhoncus dapibus non ac justo. Vivamus lectuis vestibulum
            metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut la
            interdum turpis. Curabitur porta auctor quam, pretium facilisis
            nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit
            nec.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
