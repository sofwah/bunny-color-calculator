import gene_code_description from '../img/gene_code_description.png';
import gene_calc from '../img/gene_calc.png';

export function InfoPopup({ setInfoIsOpen }) {

  function closeInfoPopup(e) {
    setInfoIsOpen(false);
  };

  function handleInnerClick(e) {
    // Prevent the click event from bubbling up to the outer div
    e.stopPropagation();
  };

  return (
    <div
      onClick={closeInfoPopup}
      className='fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-start'
    >
      <div
        onClick={handleInnerClick}
        className='bg-gray-100 rounded-lg shadow-lg w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]
        h-[85%] fixed top-16'
      >
        <div
          className='absolute right-4 top-2 text-2xl text-gray-800 hover:text-gray-500 cursor-pointer'
        >
          <div onClick={closeInfoPopup}>
            &#10005;
          </div>
        </div>

        <div className='px-12 pt-14 pb-10 h-full w-full overflow-y-scroll'>
          <p className='mb-3'>
            <span className='font-medium'>Bra att veta</span> när denna sida används är att
            resultatet inte är garanterat att vara korrekt om de fulla genkoderna inte har fyllts i.
            Detta beror på att programmet i beräkningarna antar att okända gener, symboliserade med
            "_", är mer recessiva och kan döljas av alla andra gentyper.
          </p>
          <p>
            Till exempel, om en möjlig genkombination för avkommor är
            <span className='font-medium whitespace-nowrap'> A_ B_ C_ d_ gg</span> kommer den antas
            vara blå, även om "<span className='font-medium '>_</span>" på D-locus riskerar att
            egentligen vara <span className='font-medium'> D</span> vilket istället skulle resultera
            i svart. För att minimera risken för felaktiga beräkningar är det därför rekommenderat
            att fylla i genkoderna så noggrannt som möjligt!
          </p>

          <br></br>

          <p className='text-lg font-medium mb-3 mt-4'>Grundläggande genetik</p>

          <p className='text-sm'>
            Kaninfärger beskrivs genetiskt med bokstavskoder, huvudsakligen A, B, C, D och G.
            Varje gen påverkar kaninens färg på olika sätt, A avgör till exempel graden av
            pigmentering och B kontrollerar gula pigment.
          </p>

          <div class='flex justify-center items-center py-5'>
            <img src={gene_code_description} className="w-[80%]" alt="Description of gene types"/>
          </div>

          <p className='text-sm'>
            För varje färg har kaniner två gener, och genkoder skriv därför med par av dessa
            bokstäver. Vissa gener är mer dominanta än andra och kan därför dölja mindre dominanta
            gener.
          </p>

          <p className='mb-1 mt-3 text-sm'>
            Dominansordningen för respektive locus är som följande:
          </p>

          <p className='text-sm'>
            &#8226; <span className='font-medium'>A-locus</span>: A (full pigmentering),
            a<sup>chi</sup> (chinchilla), a<sup>m</sup> (zobel/siames), a<sup>n</sup> (ryss),
            a (vit rödögd).
          </p>
          <p className='text-sm'>
            &#8226; <span className='font-medium'>B-locus</span>: B (full pigmentering),
            b<sup>j</sup> (japanteckning), b (gul).
          </p>
          <p className='text-sm'>
            &#8226; <span className='font-medium'>C-locus</span>: C (full pigmentering), c (brun).
          </p>
          <p className='text-sm'>
            &#8226; <span className='font-medium'>D-locus</span>: D (full pigmentering), d (blå).
          </p>
          <p className='text-sm'>
            &#8226; <span className='font-medium'>G-locus</span>: G (Viltfärgad),
            g<sup>o</sup> (otter), g (helfärgad)
          </p>

          <p className='mb-1 mt-3 text-sm'>
            Till exempel, en kanin med genkoden
            <span className='font-medium whitespace-nowrap'> AA BB CC <u>dd</u> gg</span> är blå, medan en
            kanin med genkoden <span className='font-medium whitespace-nowrap'>AA BB CC <u>Dd</u> gg </span>
            är svart. Den andra kaninen <i>bär</i> dock på blått och kan få ungar som är blå om den
            andra föräldern också har ett <span className='font-medium'>d</span> på sitt D-locus.
          </p>

          <p className='mb-1 mt-3 text-sm'>
            Om dessa två kaniner skulle få ungar skulle sannolikhetsdistributionen av genkoder på
            D-locus se ut såhär:
          </p>

          <div class='flex justify-center items-center py-5'>
            <img src={gene_calc} className="w-[60%]" alt="Calculation of "/>
          </div>

        </div>
      </div>
    </div>
  )
}