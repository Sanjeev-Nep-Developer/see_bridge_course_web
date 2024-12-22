const CourseContent = () => {
    return (
      <div id="courseOverView" className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-4">Courses Content</h2>
          <h3 className="text-lg font-semibold text-center mb-4">We Deliver What We Promise To The students Without Compromising The Quality .</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* English Course */}
            <div className="bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold p-4 border-b border-gray-200">English</h3>
              <div className="overflow-y-auto max-h-64 p-4">
                <ul className="list-disc pl-6">
                  <li>Nouns and Articles</li>
                  <li>Pronouns & Determiners</li>
                  <li>Verbs</li>
                  <li>Adjectives</li>
                  <li>Adverbs</li>
                  <li>Prepositions</li>
                  <li>Conjunctions</li>
                  <li>Interjections</li>
                  <li>Tense</li>
                  <li>Subject-Verb Agreement</li>
                  <li>Conditionals</li>
                  <li>Voice</li>
                  <li>Speech</li>
                  <li>Relative Clauses</li>
                </ul>
              </div>
              <div className="p-4 text-center text-gray-600 cursor-pointer">Scroll for more</div>
            </div>
  
            {/* Biology Course */}
            <div className="bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold p-4 border-b border-gray-200">Biology</h3>
              <div className="overflow-y-auto max-h-64 p-4">
                <ul className="list-disc pl-6">
                  {/* List of biology videos */}
                  <li>Introduction to Zoology</li>
                  <li>Origin of Evolution</li>
                  <li>Classification of animals</li>
                  <li>Kingdom Protista, Protozoa</li>
                  <li>Kingdom Animalia, Porifera</li>
                  <li>Phylum: Coelenterata, Phylum: Platyhelmenthis</li>
                  <li>Phylum: Nematoda, Phylum: Annelida</li>
                  <li>Phylum :Arthopoda, Phylum: Mollusca</li>
                  <li>Phylum: Echinodermata, Phylum: Chordata</li>
                  <li>Animal Adoption And Behaviour</li>
                  <li>Endocrinology</li>
                  <li>Human Body</li>
                  <li>Kingdom Plantae</li>
                  <li>Reproduction in Plant</li>
                  <li>Plant Anatomy and Morphology</li>
                  <li>Virus</li>
                  <li>Cell Biology</li>
                  <li>Genetics</li>
                  <li>Ecology</li>
                  <li>Conclusion</li>
                </ul>
              </div>
              <div className="p-4 text-center text-gray-600 cursor-pointer">Scroll for more</div>
            </div>
  
            {/* Chemistry Course */}
            <div className="bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold p-4 border-b border-gray-200">Chemistry</h3>
              <div className="overflow-y-auto max-h-64 p-4">
                <ul className="list-disc pl-6">
                  {/* List of chemistry videos */}
                  <li>Language of Chemistry(Part-1)</li>
                  <li>Language of Chemistry(Part-2)</li>
                  <li>Chemistry Arithmetic</li>
                  <li>Atomic Structure(Part-1)</li>
                  <li>Atomic Structure(Part-2)</li>
                  <li>Classification of Elements</li>
                  <li>Chemical Reaction</li>
                  <li>Acid, Base, and Salt</li>
                  <li>Non-metals</li>
                  <li>Metals</li>
                  <li>General Inorganic Compounds</li>
                  <li>Introduction to Organic Chemistry</li>
                  <li>Hydrocarbons and their derivatives</li>
                  <li>General Organic Compounds</li>
                  <li>Conclusion</li>
                </ul>
              </div>
              <div className="p-4 text-center text-gray-600 cursor-pointer">Scroll for more</div>
            </div>
  
            {/* Physics Course */}
            <div className="bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold p-4 border-b border-gray-200">Physics</h3>
              <div className="overflow-y-auto max-h-64 p-4">
                <ul className="list-disc pl-6">
                  {/* List of physics videos */}
                  <li>Units, Measurement, And Dimensions</li>
                  <li>Simple and vector</li>
                  <li>Motion Along Straight Line</li>
                  <li>Projectile Motion</li>
                  <li>Newton Law of Motion</li>
                  <li>Friction</li>
                  <li>Work, Energy</li>
                  <li>Power and Collision</li>
                  <li>Gravitation</li>
                  <li>Pressure and Hydrostatics</li>
                  <li>Heat and Temperature</li>
                  <li>Calorimetry and Thermal Expansion</li>
                  <li>Transfer of Heat</li>
                  <li>Light</li>
                  <li>Reflection & Refraction of Light</li>
                  <li>Dispersion of Light and Electromagnetic Waves</li>
                  <li>Phenomenon of Light in Mirror and Lens</li>
                  <li>Power of lens, Human Eye and Other Simple Instruments</li>
                  <li>Sound</li>
                  <li>Current Electricity and Magnetism</li>
                  <li>Charge and Components of Electric Circuit</li>
                  <li>Electric Power, Fuse and Wires</li>
                  <li>Effects of Electricity</li>
                  <li>Electromagnetism and Transformer</li>
                  <li>Atmosphere</li>
                  <li>Universe</li>
                </ul>
              </div>
              <div className="p-4 text-center text-gray-600 cursor-pointer">Scroll for more</div>
            </div>
  
            {/* Math Course */}
            <div className="bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold p-4 border-b border-gray-200">Math</h3>
              <div className="overflow-y-auto max-h-64 p-4">
                <ul className="list-disc pl-6">
                  {/* List of math videos */}
                  <li>Set Theory</li>
                  <li>Interest and Deprecation</li>
                  <li>Profit and Loss</li>
                  <li>Sequence and Series</li>
                  <li>Mensuration</li>
                  <li>Statistics</li>
                  <li>Polynomial Equation</li>
                  <li>Complex Number</li>
                  <li>Trigonometry part1</li>
                  <li>Trigonometry part2</li>
                  <li>Co-ordinate Geometry part1</li>
                  <li>Co-ordinate Geometry part2</li>
                  <li>Equation and Verbal Problems</li>
                  <li>Geometry</li>
                  <li>Limit and Continuity</li>
                  <li>Matrix and Determinant</li>
                  <li>Relation and Function</li>
                  <li>Mixed Question</li>
                  <li>Calculus: Derivatives and Antiderivatives</li>
                </ul>
              </div>
              <div className="p-4 text-center text-gray-600 cursor-pointer">Scroll for more</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CourseContent;
  