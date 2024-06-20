import gene_code_description from '../img/gene_code_description.png';
import gene_calc from '../img/gene_calc.png';
import { InfoDropdown } from './InfoDropdown';

export function InfoPopup({ setInfoIsOpen }) {

  function closeInfoPopup(e) {
    setInfoIsOpen(false);
  };

  function handleInnerClick(e) {
    // Prevent the click event from bubbling up to outer divs and trigger their click events.
    e.stopPropagation();
  };

  return (
    <div
      onClick={closeInfoPopup}
      className='fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-start'
    >
      <div
        onClick={handleInnerClick}
        className='bg-gray-100 rounded-lg shadow-lg w-[80vw] md:w-[70vw] lg:w-[60vw]
        h-[85%] fixed top-16'
      >
        <div
          className='absolute right-4 top-2 text-2xl text-gray-800 hover:text-gray-500
          cursor-pointer'
        >
          <div onClick={closeInfoPopup}>
            &#10005;
          </div>
        </div>

        <div className='px-12 pt-14 pb-10 h-full w-full overflow-y-scroll'>

          <p className='mb-3 text-base sm:text-lg'>
            Denna sida är ett gratis verktyg för att ta reda på möjliga färger på avkommor mellan
            kaniner. Förhoppningen är att detta ska kunna användas som ett hjälpmedel både för
            erfarna och mindre erfarna uppfödare när man själv inte kan eller orkar räkna ut vilka
            färger som kan uppstå i en kull.
          </p>

          <p className='mb-5 text-base sm:text-lg'>
            Det främsta målet har varit att hålla sidan simpel till en början för att den ska vara
            lätt att använda, men fler funktioner kan komma att läggas till längre fram.
          </p>


          <InfoDropdown
            headingHtml={<p className='text-lg font-medium'>Viktigt</p>}
            contentHtml={
              <div className='my-2'>
                <p className='mb-3'>
                  Tänk på att resultatet inte är garanterat att vara
                  korrekt om de fulla genkoderna inte har fyllts i. Detta beror på att programmet i
                  beräkningarna antar att okända gener, symboliserade med "_", är minst dominanta
                  och kan döljas av alla andra gentyper.
                </p>

                <p>
                  Till exempel, om en möjlig genkombination för avkommor är
                  <span className='font-medium whitespace-nowrap'> A_ B_ C_ d_ gg</span> kommer den
                  antas vara blå, även om "<span className='font-medium '>_</span>" på D-locus
                  riskerar att egentligen vara <span className='font-medium'> D</span>, vilket
                  istället skulle resultera i svart. För att minimera risken för felaktiga
                  beräkningar är det därför rekommenderat att fylla i genkoderna i så stor
                  utsträckning som möjligt!
                </p>
              </div>
            }
          />

          <InfoDropdown
            headingHtml={<p className='text-lg font-medium'>"Okända genkoder"</p>}
            contentHtml={
              <div className='my-2'>
                <p className='mb-3'>
                  Under "Okända genkoder" samlas alla genkoder som inte kan kopplas till en färg i
                  databasen. Oftast beror detta på för många okända gener i genkoden, men i vissa
                  fall är det för att den aktuella färgen inte har lagts till ännu.
                </p>

                <p>
                  Detta gäller främst mer komplexa färger som jag inte med säkerhet har kunnat
                  namnge. Dessa kommer dock också läggas till inom kort.
                </p>
              </div>
            }
          />

          <InfoDropdown
            headingHtml={<p className='text-lg font-medium'>Grundläggande genetik</p>}
            contentHtml={
              <div className='my-2'>
                <p className='mb-3'>
                  Algoritmerna som programmet använder sig av är baserade på grundläggande genetiska
                  principer. Kaninfärger beskrivs genetiskt med bokstavskoder, huvudsakligen A, B,
                  C, D och G. Varje gen påverkar kaninens färg på olika sätt, A avgör till exempel
                  graden av pigmentering och B kontrollerar gula pigment. Det är genom blandingar
                  av olika variationer av dessa som alla olika pälsfärger kan uppstå.
                </p>

                <div class='flex justify-center items-center py-5'>
                  <img
                    src={gene_code_description}
                    className="w-[90%] sm:w-[60%]"
                    alt="Description of gene types"
                  />
                </div>

                <p className='mb-3'>
                  För varje färg har kaniner två gener, och genkoder skriv därför med par av dessa
                  bokstäver. Vissa gener är mer dominanta än andra och kan därför dölja mindre
                  dominanta gener.
                </p>

                <p className='mb-1'>
                  Dominansordningen för respektive locus är som följande:
                </p>

                <p>
                  &#8226; <span className='font-medium'>A-locus</span>: A (full pigmentering),
                  a<sup>chi</sup> (chinchilla), a<sup>m</sup> (zobel/siames), a<sup>n</sup> (ryss),
                  a (vit rödögd).
                </p>
                <p>
                  &#8226; <span className='font-medium'>B-locus</span>: B (full pigmentering),
                  b<sup>j</sup> (japanteckning), b (gul).
                </p>
                <p>
                  &#8226; <span className='font-medium'>C-locus</span>: C (full pigmentering),
                  c (brun).
                </p>
                <p>
                  &#8226; <span className='font-medium'>D-locus</span>: D (full pigmentering),
                  d (blå).
                </p>
                <p>
                  &#8226; <span className='font-medium'>G-locus</span>: G (Viltfärgad),
                  g<sup>o</sup> (otter), g (helfärgad)
                </p>

                <p className='mb-3 mt-3'>
                  Till exempel, en kanin med genkoden
                  <span className='font-medium whitespace-nowrap text-[#004D9C]'> AA BB CC <u>dd</u> gg </span>
                  är blå, medan en kanin med genkoden
                  <span className='font-medium whitespace-nowrap text-[#B84981]'> AA BB CC <u>Dd</u> gg </span>
                  är svart. Den andra kaninen <i>bär</i> dock på blått och kan få ungar som är blå
                  om den andra föräldern också har ett <span className='font-medium'>d</span> på
                  sitt D-locus.
                </p>

                <p className='mb-1'>
                  Om dessa två kaniner skulle få ungar skulle sannolikhetsdistributionen av genkoder
                  på D-locus se ut såhär:
                </p>

                <div class='flex justify-center items-center py-5'>
                  <img src={gene_calc} className="w-[90%] sm:w-[60%]" alt="Calculation of "/>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}