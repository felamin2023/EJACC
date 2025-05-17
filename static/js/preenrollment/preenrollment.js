document.getElementById("patient_profile_nextbtn").onclick = function () {
  document.getElementById("step1_page").classList.add("hidden");
  document.getElementById("step2_page").classList.remove("hidden");
};


const barangayData = {
  // Cebu City barangays
  cebu_city: [
    "Adlaon", "Agsungot", "Apas", "Babag", "Bacayan", "Banilad", "Basak Pardo", 
    "Basak San Nicolas", "Binaliw", "Bonbon", "Budlaan", "Buhisan", "Bulacao", 
    "Buot", "Busay", "Calamba", "Cambinocot", "Capitol Site", "Carreta", 
    "Cogon Pardo", "Day-as", "Duljo Fatima", "Ermita", "Guadalupe", "Guba", 
    "Hipodromo", "Inayawan", "Kalubihan", "Kamagayan", "Kamputhaw", "Kasambagan", 
    "Kinasang-an", "Labangon", "Lahug", "Lorega San Miguel", "Lusaran", "Luz", 
    "Mabini", "Mabolo", "Malubog", "Mambaling", "Pahina Central", "Pahina San Nicolas", 
    "Parian", "Paril", "Pasil", "Poblacion Pardo", "Pulangbato", "Pung-ol Sibugay", 
    "Quiot", "Saba", "Sambag I", "Sambag II", "San Antonio", "San Jose", 
    "San Nicolas Proper", "San Roque", "Santa Cruz", "Santo Niño", "Sapangdaku", 
    "Sawang Calero", "Sinsin", "Sirao", "Suba", "Sudlon I", "Sudlon II", "T. Padilla", 
    "Tabunan", "Tagba-o", "Talamban", "Taptap", "Tejero", "Tinago", "Tisa", "To-ong", 
    "Zapatera"
  ],
  
  // Mandaue City barangays
  mandaue: [
    "Alang-alang", "Bakilid", "Banilad", "Basak", "Cabancalan", "Cambaro", 
    "Canduman", "Casili", "Casuntingan", "Centro", "Cubacub", "Guizo", 
    "Ibabao-Estancia", "Jagobiao", "Labogon", "Looc", "Maguikay", "Mantuyong", 
    "Opao", "Pagsabungan", "Pakna-an", "Subangdaku", "Tabok", "Tingub", "Tipolo", 
    "Umapad"
  ],
  
  // Lapu-Lapu City barangays
  lapu_lapu: [
    "Agus", "Babag", "Bankal", "Baring", "Basak", "Buaya", "Calawisan", 
    "Canjulao", "Caubian", "Cawhagan", "Caw-oy", "Dapdap", "Gun-ob", "Ibo", 
    "Looc", "Mactan", "Maribago", "Marigondon", "Opon", "Pajac", "Pajo", 
    "Poblacion", "Pangan-an", "Pusok", "Sabang", "San Vicente", "Santa Rosa", 
    "Subabasbas", "Talima", "Tingo"
  ],
  
  // Talisay City barangays
  talisay: [
    "Biasong", "Bulacao", "Cansojong", "Dumlog", "Jaclupan", "Lagtang", 
    "Lawaan I", "Lawaan II", "Lawaan III", "Linao", "Maghaway", "Manipis", 
    "Mohon", "Poblacion", "Pooc", "San Isidro", "San Roque", "Tabunok", 
    "Tangke", "Tapul"
  ],
  
  // Danao City barangays
  danao: [
    "Baliang", "Cabancalan", "Cahumayan", "Cawit", "Cogon Cruz", "Dungga", 
    "Guinsay", "Guinacot", "Ibo", "Langub", "Lawaan", "Looc", "Mabini", 
    "Masaba", "Masbate", "Nagado", "Oguis", "Poblacion", "Sabang", "Suba", 
    "Taboc", "Togonon"
  ],
  
  // Toledo City barangays
  toledo: [
    "Awihao", "Ibo", "Bato", "Buaya", "Bulongan", "Cabitoonan", "Calongcalong", 
    "Cambang-ug", "Canayon", "Cantabaco", "Capitan Claudio", "Carmen", "Daanglungsod", 
    "Don Andres Soriano", "Dumlog", "Gen. Climaco", "Ilihan", "Landahan", "Loay", 
    "Luray I", "Luray II", "Matab-ang", "Media Once", "Poblacion", "Poog", 
    "Putingbato", "Sagay", "Sam Pedro", "San Antonio", "San Isidro", "San Jose", 
    "San Juan", "San Rafael", "Sangi", "Santo Niño", "Subayon", "Talavera", 
    "Tubod"
  ],
  
  // Carcar City barangays
  carcar: [
    "Bolinawan", "Calidngan", "Can-asujan", "Guadalupe", "Liburon", "Napo", 
    "Ocaña", "Perrelos", "Poblacion I", "Poblacion II", "Poblacion III", "Tuyom", 
    "Valladolid", "Valencia"
  ],
  
  // Naga City barangays
  naga: [
    "Alpaco", "Bairan", "Balirong", "Cabungahan", "Cantao-an", "Central Poblacion", 
    "Cogon", "Colon", "East Poblacion", "Inayagan", "Inoburan", "Jaguimit", 
    "Langtad", "Lanas", "Lutac", "Mainit", "Mayana", "Naalad", "North Poblacion", 
    "Pangdan", "Patag", "South Poblacion", "Tagjaguimit", "Tangke", 
    "Tinaan", "Tuyan", "Uling", "West Poblacion"
  ],
  
  // Bogo City barangays
  bogo: [
    "Anonang Norte", "Anonang Sur", "Banban", "Binabag", "Bungtod", "Carbon", 
    "Cayang", "Cogon", "Dakit", "Don Pedro Rodriguez", "Gairan", "Guadalupe", 
    "La Paz", "Libertad", "Lourdes", "Malingin", "Marangog", "Nailon", "Odlot", 
    "Pandan", "Polambato", "Sambag", "San Vicente", "Taytayan", "Guadalupe"
  ],
  
  // Argao barangays
  argao: [
    "Anajao", "Apo", "Balisong", "Binlod", "Bogo", "Bulasa", "Butong", 
    "Calagasan", "Cambugui", "Canbanua", "Canbantug", "Candabong", "Cansumalig", 
    "Capio-an", "Casay", "Catang", "Colawin", "Conalum", "Guiwanon", "Gutlang", 
    "Jampang", "Jomgao", "Langtad", "Lamacan", "Lengigon", "Linut-od", "Mabasa", 
    "Macaas", "Mandilikit", "Mompeller", "Naghalin", "Panadtaran", "Poblacion", 
    "Sabang", "Sua", "Sumaguan", "Tabayag", "Talaga", "Talo-ot", "Tiguib", 
    "Tulang", "Tulic", "Ubaub", "Usmad"
  ],
  
  // Badian barangays
  badian: [
    "Alawijao", "Balhaan", "Basak", "Basiao", "Bato", "Buguil", "Calangcang", 
    "Candiis", "Dobdob", "Ginablan", "Lambug", "Malhiao", "Matutinao", "Poblacion", 
    "Santicon", "Sohoton", "Sulsugan", "Taytay", "Tigbao", "Zaragosa"
  ],
  
  // Balamban barangays
  balamban: [
    "Abucayan", "Aliwanay", "Binongkalan", "Buanoy", "Cabagdalan", "Cabasiangan", 
    "Cantibas", "Cansomoroy", "Duangan", "Ginatilan", "Hingatmonan", "Lamesa", 
    "Lamin", "Matun-og", "Nangka", "Prenza", "Singsing", "Sunog", "Talungon", 
    "Triumfo", "Vito"
  ],
  
  // Bantayan barangays
  bantayan: [
    "Atop-atop", "Baigad", "Binaobao", "Botigues", "Guiwanon", "Hilotongan", 
    "Kabac", "Kabangbang", "Kampingganon", "Kang-actol", "Kangkaibe", "Labad", 
    "Lipayran", "Luyongbaybay", "Mojon", "Obo-ob", "Patao", "Poblacion", 
    "Sangat", "Suba", "Sungko", "Tamiao"
  ],
  
  // Barili barangays
  barili: [
    "Azucena", "Bagakay", "Balingasag", "Balucating", "Bare", "Bolocboloc", 
    "Budbud", "Bugnay", "Cagay", "Calaboon", "Campangga", "Candugay", "Dakit", 
    "Giloctog", "Guibuangan", "Gunting", "Hipodromo", "Japitan", "Kangdampas", 
    "Kabadiangan", "Lupo", "Luhod", "Maantil", "Malonogon", "Mantalongon", 
    "Mantayupan", "Minolos", "Nabunturan", "Nasipit", "Paril", "Patupat", 
    "Poblacion", "Pangpang", "Sabado", "Santa Ana", "Santa Lucia", "Tal-ot", 
    "Tuy-anan", "Vito"
  ],
  
  // Consolacion barangays
  consolacion: [
    "Cabangahan", "Cansaga", "Danglag", "Jugan", "Lamac", "Lanipga", "Nangka", 
    "Panas", "Panoypoy", "Pitogo", "Poblacion Occidental", "Poblacion Oriental", 
    "Pulpogan", "Sacsac", "Tayud", "Tilhaong", "Tolotolo", "Tugbongan"
  ],
  
  // Cordova barangays
  cordova: [
    "Alegria", "Bangbang", "Buagsong", "Catarman", "Cogon", "Dapitan", "Day-as", 
    "Gabi", "Gilutongan", "Ibabao", "Pilipog", "Poblacion", "San Miguel"
  ],
  
  // Dalaguete barangays
  dalaguete: [
    "Ablayan", "Babayongan", "Balud", "Banhigan", "Bulak", "Caliongan", "Caleriohan", 
    "Casay", "Catolohan", "Cawayan", "Coro", "Consolacion", "Dugyan", "Dumalan", 
    "Jolomaynon", "Lanao", "Langkas", "Lumbang", "Maloray", "Mananggal", "Manlapay", 
    "Obong", "Obo", "Panas", "Poblacion", "Salug", "Sacsac", "Tabon", "Tapul", 
    "Tuba", "Tuyom"
  ],
  
  // Liloan barangays
  liloan: [
    "Cabadiangan", "Calero", "Catarman", "Cogon", "Cotcot", "Jubay", "Lataban", 
    "Mulao", "Poblacion", "San Roque", "San Vicente", "Santo Niño", "Tayud", 
    "Yati"
  ],
  
  // Minglanilla barangays
  minglanilla: [
    "Calajoan", "Camp 7", "Camp 8", "Cuanos", "Guindaruhan", "Linao", "Manduang", 
    "Pakigne", "Poblacion Ward I", "Poblacion Ward II", "Poblacion Ward III", 
    "Poblacion Ward IV", "Tubod", "Tulay", "Tungkil", "Tungkop", "Vito"
  ],
  
  // Moalboal barangays
  moalboal: [
    "Agbalanga", "Bala", "Balabagon", "Basdiot", "Bugtong", "Busay", "Lanao", 
    "Poblacion East", "Poblacion West", "Saavedra", "Tomonoy", "Tuble", "Tunga", 
    "Tupas"
  ],
  
  // Oslob barangays
  oslob: [
    "Alo", "Bangcogon", "Bonbon", "Calumpang", "Can-ukban", "Cañang", "Cansalo", 
    "Daanlungsod", "Hagdan", "Lagunde", "Looc", "Luka", "Mainit", "Malabuyoc", 
    "Montpeller", "Nueva Caceres", "Poblacion", "Pungtod", "Taong", "Tan-awan", 
    "Tumalog"
  ],
  
  // Tagbilaran City barangays
  tagbilaran: [
    "Bool", "Booy", "Cabawan", "Cogon", "Dampas", "Dao", "Manga", "Mansasa", 
    "Poblacion I", "Poblacion II", "Poblacion III", "San Isidro", "Taloto", 
    "Tiptip", "Ubujan"
  ],
  
  // Panglao barangays
  panglao: [
    "Bil-isan", "Bolod", "Danao", "Daulungan", "Doljo", "Libaong", "Looc", 
    "Lourdes", "Poblacion", "Tangnan", "Tawala"
  ],
  
  // Tubigon barangays
  tubigon: [
    "Pinayagan Norte", "Pinayagan Sur", "Pooc Occidental", "Pooc Oriental", 
    "Potohan", "Bunacan", "Cahayag", "Cabulihan", "Centro", "Geronimo", 
    "Imelda", "Guiwanon", "Inaghuban", "Maca-as", "Panadtaran", "Panaytayon", 
    "Sikatuna", "Ubos Cabawan", "Ubojan", "Ilihan Norte", "Ilihan Sur"
  ],
  
  // Jagna barangays
  jagna: [
    "Alejawan", "Balili", "Boctol", "Bunga Ilaya", "Bunga Mar", "Buyog", 
    "Cabunga-an", "Calabacita", "Cambugason", "Can-ipol", "Can-uba", "Canjulao", 
    "Cantuyoc", "Cantagay", "Ipil", "Kinagbaan", "Laca", "Larapan", "Lonoy", 
    "Looc", "Malbog", "Naatang", "Nausok", "Odiong", "Pagina", "Pangdan", 
    "Poblacion", "Tejero", "Tubod Mar", "Tubod Monte"
  ],
  
  // Anda barangays
  anda: [
    "Bacong", "Bad-as", "Buenasuerte", "Candabong", "Casica", "Katipunan", 
    "Linawan", "Lundag", "Poblacion", "Santa Cruz", "Suba", "Talisay", "Tawid", 
    "Virgen", "Ubos"
  ]
};


  // Function to update barangay dropdown based on selected city/municipality
  function updateBarangays() {
    const citySelect = document.getElementById('cityMunicipality');
    const barangaySelect = document.getElementById('barangayDropdown');
    const selectedCity = citySelect.value;
    
    // Clear current options
    barangaySelect.innerHTML = '';
    
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Select Barangay';
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    barangaySelect.add(defaultOption);
    
    // If we have data for the selected city
    if (barangayData[selectedCity]) {
      // Add the barangays for the selected city
      barangayData[selectedCity].forEach(barangay => {
        const option = document.createElement('option');
        option.text = barangay;
        option.value = barangay.toLowerCase().replace(/\s+/g, '_');
        barangaySelect.add(option);
      });
    } else {
      // If no data is available for the selected city
      const noDataOption = document.createElement('option');
      noDataOption.text = 'No barangay data available';
      noDataOption.disabled = true;
      barangaySelect.add(noDataOption);
    }
  }