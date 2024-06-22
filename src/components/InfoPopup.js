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
        className='fixed bg-gray-100 rounded-lg shadow-lg w-[80vw] md:w-[70vw] lg:w-[60vw]
        max-h-[85%] top-16 flex flex-col'
      >
        <div
          className='flex items-end justify-between text-2xl'
        >
          <div
            onClick={closeInfoPopup}
            className='ml-auto mr-3 my-1 cursor-pointer text-gray-800 hover:text-gray-500'
          >
            &#10005;
          </div>
        </div>

        <div className='px-8 sm:px-10 pb-8 pt-1 mb-2 mt-3 sm:mt-5 w-full overflow-y-auto'>

          <p className='mb-7 text-base sm:text-lg'>
            Denna sida är ett gratis verktyg för att ta reda på möjliga färger på avkommor mellan
            kaniner. Förhoppningen är att detta ska kunna användas som ett hjälpmedel, både för
            erfarna och mindre erfarna uppfödare, när man själv inte kan eller orkar räkna ut vilka
            färger som kan uppstå i en kull.
          </p>

          <InfoDropdown
            headingHtml={<p className='text-lg font-medium'>Bra att veta</p>}
            contentHtml={
              <div className='mt-2 mb-4'>
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
              <div className='mt-2 mb-4'>
                <p>
                  Under "Okända genkoder" samlas alla genkoder som inte kan kopplas till en färg i
                  databasen. Oftast beror detta på för många okända gener i genkoden, men i vissa
                  fall är det för att den aktuella färgen inte har lagts till ännu.
                </p>
              </div>
            }
          />

          <InfoDropdown
            headingHtml={<p className='text-lg font-medium'>Grundläggande genetik</p>}
            contentHtml={
              <div className='mt-2'>
                <p className='mb-3'>
                  Algoritmerna som programmet använder sig av är baserade på grundläggande genetiska
                  principer. Kaninfärger beskrivs genetiskt med bokstavskoder, huvudsakligen A, B,
                  C, D och G. Varje gen påverkar kaninens färg på olika sätt, A avgör till exempel
                  graden av pigmentering och B kontrollerar gula pigment. Det är genom blandingar
                  av olika variationer av dessa som alla olika pälsfärger kan uppstå.
                </p>

                <div className='flex justify-center items-center py-5'>
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
                  &#8226; <span className='font-medium'>A-locus</span>:
                  A&nbsp;(full&nbsp;pigmentering),
                  a<sup>chi</sup>&nbsp;(chinchilla),
                  a<sup>m</sup>&nbsp;(zobel/siames),
                  a<sup>n</sup>&nbsp;(ryss),
                  a&nbsp;(vit&nbsp;rödögd).
                </p>
                <p>
                  &#8226; <span className='font-medium'>B-locus</span>:
                  B&nbsp;(full&nbsp;pigmentering),
                  b<sup>j</sup>&nbsp;(japanteckning),
                  b&nbsp;(gul).
                </p>
                <p>
                  &#8226; <span className='font-medium'>C-locus</span>:
                  C&nbsp;(full&nbsp;pigmentering),
                  c&nbsp;(brun).
                </p>
                <p>
                  &#8226; <span className='font-medium'>D-locus</span>:
                  D&nbsp;(full&nbsp;pigmentering),
                  d&nbsp;(blå).
                </p>
                <p>
                  &#8226; <span className='font-medium'>G-locus</span>:
                  G&nbsp;(Viltfärgad),
                  g<sup>o</sup>&nbsp;(otter),
                  g&nbsp;(helfärgad)
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

                <div className='flex justify-center items-center py-5'>
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