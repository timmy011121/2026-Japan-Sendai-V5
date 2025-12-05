
import { DailyItinerary, FlightInfo, SpotType, ChecklistItem } from './types';

export const FLIGHTS: FlightInfo[] = [
  {
    type: 'Depart',
    date: '2026/01/13',
    airline: '台灣虎航',
    flightNumber: 'IT216',
    from: 'TPE 桃園 T1',
    to: 'HND 羽田 T3',
    time: '00:10 - 04:00',
    terminal: 'T3'
  },
  {
    type: 'Return',
    date: '2026/01/24',
    airline: '中華航空',
    flightNumber: 'CI101',
    from: 'NRT 成田 T2',
    to: 'TPE 桃園 T2',
    time: '14:35 - 17:45',
    terminal: 'T2'
  }
];

export const TRIP_DATA: DailyItinerary[] = [
  {
    date: '01/12',
    dayOfWeek: 'Day 0',
    weather: { temp: '15°C', condition: '涼爽舒適', icon: '✈️' },
    hotel: {
      name: '機上 / 往機場',
      address: '',
      mapUrl: ''
    },
    spots: [
      {
        id: 'd0-1',
        time: '19:00',
        name: '台北車站機場捷運',
        type: SpotType.TRANSPORT,
        description: '集合準備前往機場。',
        cost: 'NT$160',
        isPriority: true,
        tips: '班次：每15分鐘一班直達車。車程約36分。'
      },
      {
        id: 'd0-2',
        time: '20:00',
        name: '抵達桃園機場',
        type: SpotType.TRANSPORT,
        description: '第一航廈辦理登機。',
        isPriority: true,
        tips: '00:10起飛。請檢查護照、Visit Japan Web QR Code。'
      }
    ]
  },
  {
    date: '01/13',
    dayOfWeek: 'Day 1',
    weather: { temp: '5°C', condition: '陰天微冷', icon: '☁️' },
    hotel: {
      name: '大和魯內仙台西口飯店',
      address: '仙台西口',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Daiwa+Roynet+Hotel+Sendai-nishiguchi'
    },
    spots: [
      {
        id: 'd1-1',
        time: '04:00',
        name: '抵達羽田機場 (HND)',
        type: SpotType.TRANSPORT,
        description: '預計 06:00 入境完成。',
        isPriority: true
      },
      {
        id: 'd1-2',
        time: '07:08',
        name: '前往仙台 (轉乘)',
        type: SpotType.TRANSPORT,
        description: '羽田(京急) -> 品川(JR) -> 東京(新幹線) -> 仙台',
        cost: '¥11,720',
        tags: ['事先購買新幹線'],
        tips: '07:08 羽田T3 -> 07:29 品川 (轉乘8分) -> 07:37 品川 -> 07:45 東京 (轉乘33分) -> 08:18 東京(20月台) -> 09:56 仙台'
      },
      {
        id: 'd1-3',
        time: '10:30',
        name: '仙台站 & 寄放行李',
        type: SpotType.HOTEL,
        description: '購買「盧普仙台」觀光巴士一日券 (¥630)。',
        cost: '¥630',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sendai+Station'
      },
      {
        id: 'd1-4',
        time: '11:00',
        name: '仙台朝市',
        type: SpotType.SIGHTSEEING,
        description: '新鮮海產市場。',
        tips: '營業時間 08:00-17:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sendai+Asaichi'
      },
      {
        id: 'd1-food-1',
        time: '12:00',
        name: '牛たん炭焼 利久 仙台駅店',
        type: SpotType.RESTAURANT,
        description: '午餐：厚切牛舌定食。',
        tags: ['推薦'],
        tips: '營業時間 10:00-21:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Rikyu+Sendai+Station'
      },
      {
        id: 'd1-5',
        time: '14:00',
        name: '瑞鳳殿',
        type: SpotType.SIGHTSEEING,
        description: '伊達政宗靈廟。',
        cost: '¥570',
        tips: '營業時間 09:00-16:50',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zuihoden'
      },
      {
        id: 'd1-6',
        time: '15:30',
        name: '仙台城跡',
        type: SpotType.SIGHTSEEING,
        description: '伊達政宗騎馬像、市景。',
        cost: '¥700',
        tips: '24小時開放',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sendai+Castle+Ruins'
      },
      {
        id: 'd1-7',
        time: '17:00',
        name: 'AER 展望台 & 購物中心',
        type: SpotType.SIGHTSEEING,
        description: '免費俯瞰仙台夜景。',
        tips: '展望台開放至 20:00，購物至 21:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=AER+Sendai'
      },
      {
        id: 'd1-8',
        time: '19:00',
        name: '一番町/中央通商店街',
        type: SpotType.SHOPPING,
        description: '返回仙台站周邊逛街。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ichibancho+Shopping+Arcade'
      },
      {
        id: 'd1-food-2',
        time: '19:30',
        name: '閣 仙台駅前店',
        type: SpotType.RESTAURANT,
        description: '晚餐：新鮮生魚片、牡蠣料理。',
        tags: ['推薦'],
        tips: '營業時間 11:30-14:30, 17:00-22:30',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kaku+Sendai+Station'
      },
      {
        id: 'd1-9',
        time: '21:00',
        name: 'Daiwa Roynet Hotel',
        type: SpotType.HOTEL,
        description: '辦理入住休息。',
        isPriority: true
      },
      // Backups
      {
        id: 'd1-bk-1',
        time: '候補',
        name: '烤牛舌 善治郎',
        type: SpotType.RESTAURANT,
        description: '牛舌定食 (11:00-22:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zenjirou+Sendai'
      },
      {
        id: 'd1-bk-2',
        time: '候補',
        name: '味之牛舌 喜助',
        type: SpotType.RESTAURANT,
        description: '牛舌套餐 (10:00-21:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kisuke+Sendai'
      },
      {
        id: 'd1-bk-3',
        time: '候補',
        name: '仙台站內壽司店',
        type: SpotType.RESTAURANT,
        description: '壽司 (11:00-21:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sendai+Station+Sushi'
      },
      {
        id: 'd1-bk-4',
        time: '候補',
        name: '司 牛舌專賣店',
        type: SpotType.RESTAURANT,
        description: '牛舌定食 (11:00-23:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Tsukasa+Gyutan'
      },
      {
        id: 'd1-bk-5',
        time: '候補',
        name: '利久 本店',
        type: SpotType.RESTAURANT,
        description: '牛舌定食 (11:30-22:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Rikyu+Honten'
      },
      {
        id: 'd1-bk-6',
        time: '候補',
        name: '閣之牛舌',
        type: SpotType.RESTAURANT,
        description: '牛舌 (11:30-22:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kaku+Gyutan'
      },
      {
        id: 'd1-bk-7',
        time: '候補',
        name: '仙台味噌拉麵',
        type: SpotType.RESTAURANT,
        description: '味噌拉麵 (11:00-00:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sendai+Miso+Ramen'
      },
      {
        id: 'd1-bk-8',
        time: '候補',
        name: '仙台牛角',
        type: SpotType.RESTAURANT,
        description: '燒肉 (11:00-22:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Gyu-Kaku+Sendai'
      },
      {
        id: 'd1-bk-9',
        time: '候補',
        name: '麒麟拉麵',
        type: SpotType.RESTAURANT,
        description: '拉麵 (11:30-21:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kirin+Ramen+Sendai'
      },
      {
        id: 'd1-bk-10',
        time: '候補',
        name: '伊達牛舌本舖',
        type: SpotType.RESTAURANT,
        description: '厚切牛舌 (11:00-21:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Date+Gyutan'
      },
      {
        id: 'd1-bk-11',
        time: '候補',
        name: 'ずんだ茶寮 (毛豆奶昔)',
        type: SpotType.DESSERT,
        description: '必喝毛豆奶昔 (10:00-21:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zunda+Saryo'
      },
      {
        id: 'd1-bk-12',
        time: '候補',
        name: '花月堂',
        type: SpotType.DESSERT,
        description: '菠蘿麵包 (09:00-16:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kagetsudo'
      },
      {
        id: 'd1-bk-13',
        time: '候補',
        name: '萩之月',
        type: SpotType.DESSERT,
        description: '宮城特產 (10:00-19:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Hagi+no+Tsuki'
      },
      {
        id: 'd1-bk-14',
        time: '候補',
        name: 'ずんだ小徑',
        type: SpotType.DESSERT,
        description: '毛豆甜點 (10:00-21:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zunda+Komichi'
      }
    ]
  },
  {
    date: '01/14',
    dayOfWeek: 'Day 2',
    weather: { temp: '-1°C', condition: '間歇陣雪', icon: '❄️' },
    hotel: {
      name: '古勢起屋本館',
      address: '銀山溫泉',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kosekiya+Ginzan+Onsen'
    },
    spots: [
      {
        id: 'd2-1',
        time: '09:00',
        name: 'Alamo Rent A Car 取車',
        type: SpotType.TRANSPORT,
        description: '取車 (4WD)。開車約40分至松島。',
        isPriority: true,
        tips: '請準備日文譯本駕照、護照。'
      },
      {
        id: 'd2-2',
        time: '09:40',
        name: '松島海岸 & 遊覽船',
        type: SpotType.SIGHTSEEING,
        description: '日本三景之一。遊覽船觀賞260島嶼。',
        cost: '¥1,500',
        tips: '遊船約50分鐘，每小時一班(09:00首班)。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Matsushima+Bay'
      },
      {
        id: 'd2-3',
        time: '11:00',
        name: '瑞巖寺 & 五大堂',
        type: SpotType.SIGHTSEEING,
        description: '國寶寺廟與地標。',
        cost: '¥700',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zuiganji+Temple'
      },
      {
        id: 'd2-food-1',
        time: '12:00',
        name: '松島魚市場 (松島さかな市場)',
        type: SpotType.RESTAURANT,
        description: '午餐：海鮮丼、烤牡蠣。',
        tags: ['推薦'],
        tips: '營業時間 09:00-16:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Matsushima+Fish+Market'
      },
      {
        id: 'd2-4',
        time: '13:30',
        name: '開車前往銀山溫泉',
        type: SpotType.TRANSPORT,
        description: '車程約 1小時40分。',
        tips: '直接開進停車場 (古勢起屋専用駐車場)，打電話給旅館接駁。'
      },
      {
        id: 'd2-5',
        time: '16:30',
        name: '能登屋旅館 (外觀)',
        type: SpotType.SIGHTSEEING,
        description: '神隱少女原型，拍照熱點。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Notoya+Ryokan'
      },
      {
        id: 'd2-6',
        time: '17:00',
        name: '銀山溫泉街 & 白銀瀑布',
        type: SpotType.SIGHTSEEING,
        description: '大正浪漫風情，冬季冰瀑與歷史礦坑。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ginzan+Onsen'
      },
      {
        id: 'd2-7',
        time: '18:00',
        name: '古勢起屋本館',
        type: SpotType.HOTEL,
        description: '辦理入住 & 晚餐。',
        isPriority: true
      },
      // Backups
      {
        id: 'd2-bk-1',
        time: '候補',
        name: '松島牡蠣屋',
        type: SpotType.RESTAURANT,
        description: '牡蠣料理 (10:00-15:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Matsushima+Kakiya'
      },
      {
        id: 'd2-bk-2',
        time: '候補',
        name: '伊豆之華',
        type: SpotType.RESTAURANT,
        description: '咖哩麵包 (Closed)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Izu+no+Hana'
      },
      {
        id: 'd2-bk-3',
        time: '候補',
        name: '野川とうふや',
        type: SpotType.DESSERT,
        description: '豆腐、豆漿 (09:30-18:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Nogawa+Tofuya'
      },
      {
        id: 'd2-bk-4',
        time: '候補',
        name: '伊豆之華(甜點)',
        type: SpotType.DESSERT,
        description: '蕎麥冰淇淋 (Closed)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Izu+no+Hana'
      },
      {
        id: 'd2-bk-5',
        time: '候補',
        name: '西塚菓子舖',
        type: SpotType.DESSERT,
        description: '溫泉饅頭',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Nishizuka+Confectionery'
      }
    ]
  },
  {
    date: '01/15',
    dayOfWeek: 'Day 3',
    weather: { temp: '-2°C', condition: '小雪紛飛', icon: '❄️' },
    hotel: {
      name: '山形格蘭飯店',
      address: '山形市',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Yamagata+Grand+Hotel'
    },
    spots: [
      {
        id: 'd3-1',
        time: '10:00',
        name: '德良湖',
        type: SpotType.SIGHTSEEING,
        description: '開車約15分。無營業時間限制。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Tokura+Lake'
      },
      {
        id: 'd3-2',
        time: '12:00',
        name: '山形霞城公園',
        type: SpotType.SIGHTSEEING,
        description: '開車約45分。冬季雪景。',
        tips: '開放時間 05:30-22:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kajo+Park'
      },
      {
        id: 'd3-food-1',
        time: '13:00',
        name: 'そば処 明友庵',
        type: SpotType.RESTAURANT,
        description: '午餐：手打蕎麥麵。',
        tags: ['推薦'],
        tips: '11:00-16:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sobadokoro+Meiyu-an'
      },
      {
        id: 'd3-3',
        time: '15:30',
        name: '山形城跡',
        type: SpotType.SIGHTSEEING,
        description: '歷史遺址。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Yamagata+Castle'
      },
      {
        id: 'd3-4',
        time: '15:30',
        name: '上杉神社',
        type: SpotType.SIGHTSEEING,
        description: '米澤城遺址。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Uesugi+Shrine'
      },
      {
        id: 'd3-5',
        time: '17:00',
        name: '上山城',
        type: SpotType.SIGHTSEEING,
        description: '夜間點燈 (至21:00)。',
        tips: '此處可能已關閉內部參觀，僅外觀',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kaminoyama+Castle'
      },
      {
        id: 'd3-food-2',
        time: '19:00',
        name: 'SHOJIYA Yamagata',
        type: SpotType.RESTAURANT,
        description: '晚餐：蕎麥麵定食。',
        tags: ['推薦'],
        tips: '11:00-20:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Shojiya+Yamagata'
      },
      {
        id: 'd3-6',
        time: '20:30',
        name: 'Yamagata Grand Hotel',
        type: SpotType.HOTEL,
        description: '前往飯店入住。',
        isPriority: true
      },
      // Backups
      {
        id: 'd3-bk-1',
        time: '候補',
        name: '榮屋本店',
        type: SpotType.RESTAURANT,
        description: '冷拉麵 (11:30-17:50)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sakaeya+Honten'
      },
      {
        id: 'd3-bk-2',
        time: '候補',
        name: '米澤牛 登起波',
        type: SpotType.RESTAURANT,
        description: '特色料理 (11:00-21:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Yonezawa+Beef+Tokiwa'
      },
      {
        id: 'd3-bk-3',
        time: '候補',
        name: '米澤牛登起波山形店',
        type: SpotType.RESTAURANT,
        description: '米澤牛排 (07:00-22:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Yonezawa+Beef+Tokiwa+Yamagata'
      },
      {
        id: 'd3-bk-4',
        time: '候補',
        name: '山形拉麵或水果',
        type: SpotType.RESTAURANT,
        description: '拉麵/葡萄蘋果',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Yamagata+Ramen'
      },
      {
        id: 'd3-bk-5',
        time: '候補',
        name: 'シベール (Cybele)',
        type: SpotType.DESSERT,
        description: 'Rusk 麵包脆餅 (09:00-17:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Cybele+Yamagata'
      },
      {
        id: 'd3-bk-6',
        time: '候補',
        name: '乃し梅本舗 佐藤屋',
        type: SpotType.DESSERT,
        description: '乃し梅 (09:00-18:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Satoya+Yamagata'
      },
      {
        id: 'd3-bk-7',
        time: '候補',
        name: '榮玉堂',
        type: SpotType.DESSERT,
        description: '米粉紅花磅蛋糕 (09:00-18:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Eigyokudo'
      }
    ]
  },
  {
    date: '01/16',
    dayOfWeek: 'Day 4',
    weather: { temp: '-5°C', condition: '大雪/暴風雪', icon: '🌨️' },
    hotel: {
      name: '德巴特小度假飯店',
      address: '藏王溫泉',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Petit+Resort+Hotel+Der+Barte'
    },
    spots: [
      {
        id: 'd4-1',
        time: '09:00',
        name: '開車前往藏王',
        type: SpotType.TRANSPORT,
        description: '開車約30分鐘。'
      },
      {
        id: 'd4-2',
        time: '10:00',
        name: '藏王纜車・樹冰觀賞',
        type: SpotType.SIGHTSEEING,
        description: '搭乘纜車至地藏山頂站看「雪怪」。',
        cost: '¥4,400',
        tags: ['必看絕景'],
        tips: '纜車票12/10開賣。山上極冷。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zao+Ropeway'
      },
      {
        id: 'd4-3',
        time: '12:00',
        name: '藏王溫泉大露天風呂',
        type: SpotType.SIGHTSEEING,
        description: '日本最大露天溫泉。',
        cost: '¥600',
        tips: '09:30-17:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zao+Onsen+Dai+Rotemburo'
      },
      {
        id: 'd4-food-1',
        time: '13:00',
        name: 'きくち食堂 (Kikuchi)',
        type: SpotType.RESTAURANT,
        description: '午餐：成吉思汗烤羊肉定食。',
        tags: ['推薦'],
        tips: '11:00-13:40',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kikuchi+Shokudo+Zao'
      },
      {
        id: 'd4-4',
        time: '13:30',
        name: '藏王溫泉滑雪場 / 景點',
        type: SpotType.SIGHTSEEING,
        description: '滑雪場、藥師神社、地藏山頂站、藏王高原。',
        tips: '滑雪場 08:30-17:00'
      },
      {
        id: 'd4-5',
        time: '17:00',
        name: '藏王溫泉街',
        type: SpotType.SIGHTSEEING,
        description: '溫泉街散步。',
        tips: '06:00-22:00'
      },
      {
        id: 'd4-food-2',
        time: '19:00',
        name: '仙台炭焼牛たん東山',
        type: SpotType.RESTAURANT,
        description: '晚餐：極厚牛舌定食 (仙台本店)。',
        tags: ['推薦'],
        tips: '11:30-23:30',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Gyutan+Higashiyama'
      },
      {
        id: 'd4-6',
        time: '21:00',
        name: 'Petit Resort Hotel Der Barte',
        type: SpotType.HOTEL,
        description: '前往飯店入住。',
        isPriority: true
      },
      // Backups
      {
        id: 'd4-bk-1',
        time: '候補',
        name: 'SANGORO 三五郎小屋',
        type: SpotType.RESTAURANT,
        description: '溫泉咖哩飯 (10:00-16:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sangoro'
      },
      {
        id: 'd4-bk-2',
        time: '候補',
        name: '藏王纜車站餐廳',
        type: SpotType.RESTAURANT,
        description: '賞雪景午餐 (08:30-17:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zao+Ropeway+Restaurant'
      },
      {
        id: 'd4-bk-3',
        time: '候補',
        name: 'Zao Boo-',
        type: SpotType.RESTAURANT,
        description: '湯料理 (11:00-17:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zao+Boo'
      },
      {
        id: 'd4-bk-4',
        time: '候補',
        name: 'ZAO stand MY',
        type: SpotType.DESSERT,
        description: '稻花餅 (11:30-18:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=ZAO+stand+MY'
      },
      {
        id: 'd4-bk-5',
        time: '候補',
        name: 'CAFE SLOW JAM',
        type: SpotType.DESSERT,
        description: '蕎麥磅蛋糕 (11:30-22:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Cafe+Slow+Jam'
      }
    ]
  },
  {
    date: '01/17',
    dayOfWeek: 'Day 5',
    weather: { temp: '2°C', condition: '陰偶有雪', icon: '☁️' },
    hotel: {
      name: '仙台大都會飯店東館',
      address: '仙台站東口',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Sendai+East'
    },
    spots: [
      {
        id: 'd5-1',
        time: '09:00',
        name: '前往狐狸村',
        type: SpotType.TRANSPORT,
        description: '開車約 1.5 小時。'
      },
      {
        id: 'd5-2',
        time: '10:30',
        name: '藏王狐狸村',
        type: SpotType.SIGHTSEEING,
        description: '冬季狐狸互動。',
        cost: '¥1,000',
        tips: '禁止觸摸。小心隨身物品。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zao+Fox+Village'
      },
      {
        id: 'd5-3',
        time: '13:30',
        name: '金蛇水神社',
        type: SpotType.SIGHTSEEING,
        description: '黑色御守 (金運)。車程約50分。',
        tips: '08:30-16:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kanahebisui+Shrine'
      },
      {
        id: 'd5-4',
        time: '15:00',
        name: '秋保大瀑布',
        type: SpotType.SIGHTSEEING,
        description: '冬季結冰瀑布。車程約50分。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Akiu+Great+Falls'
      },
      {
        id: 'd5-5',
        time: '18:00',
        name: '仙台還車',
        type: SpotType.TRANSPORT,
        description: '歸還租車。車程約50分。',
        isPriority: true
      },
      {
        id: 'd5-food-1',
        time: '19:00',
        name: 'すし波奈 (Sushi Hana)',
        type: SpotType.RESTAURANT,
        description: '晚餐：東北壽司 (仙台Parco店)。',
        tags: ['推薦'],
        tips: '11:00-22:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sushi+Hana+Sendai+Parco'
      },
      {
        id: 'd5-6',
        time: '21:00',
        name: 'Hotel Metropolitan Sendai East',
        type: SpotType.HOTEL,
        description: '入住飯店。',
        isPriority: true
      },
      // Backups
      {
        id: 'd5-bk-1',
        time: '候補',
        name: '伊達牛舌本舖 本店',
        type: SpotType.RESTAURANT,
        description: '牛舌 (11:00-21:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Date+Gyutan'
      },
      {
        id: 'd5-bk-2',
        time: '候補',
        name: '利久 仙台站店',
        type: SpotType.RESTAURANT,
        description: '牛舌 (10:00-21:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Rikyu+Sendai'
      },
      {
        id: 'd5-bk-3',
        time: '候補',
        name: '松華堂菓子店',
        type: SpotType.DESSERT,
        description: '甜點 (10:00-17:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Shokado'
      },
      {
        id: 'd5-bk-4',
        time: '候補',
        name: '鯛吉',
        type: SpotType.DESSERT,
        description: '薄皮鯛魚燒 (10:30-19:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Taiyaki'
      }
    ]
  },
  {
    date: '01/18',
    dayOfWeek: 'Day 6',
    weather: { temp: '5°C', condition: '晴空萬里', icon: '☀️' },
    hotel: {
      name: 'APA飯店 輕井澤站前',
      address: '輕井澤站前',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=APA+Hotel+Karuizawa-Ekimae'
    },
    spots: [
      {
        id: 'd6-1',
        time: '10:00',
        name: '定禪寺通 & 媒體中心',
        type: SpotType.SIGHTSEEING,
        description: '冬季燈飾散步 (夜景預覽)，媒體中心建築名作。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sendai+Mediatheque'
      },
      {
        id: 'd6-2',
        time: '12:00',
        name: '大崎八幡宮',
        type: SpotType.SIGHTSEEING,
        description: '國寶神社。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Osaki+Hachimangu'
      },
      {
        id: 'd6-food-0',
        time: '13:00',
        name: '味之牛舌 喜助 (仙台站)',
        type: SpotType.RESTAURANT,
        description: '午餐：牛舌套餐。',
        tags: ['推薦'],
        tips: '10:00-21:30',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kisuke+Sendai+Station'
      },
      {
        id: 'd6-3',
        time: '14:31',
        name: '前往東京 (新幹線)',
        type: SpotType.TRANSPORT,
        description: 'Hayabusa: 仙台 -> 東京 (16:04抵達)',
        cost: '¥11,410',
        isPriority: true
      },
      {
        id: 'd6-4',
        time: '18:04',
        name: '前往輕井澤 (新幹線)',
        type: SpotType.TRANSPORT,
        description: 'Hakutaka: 東京 -> 輕井澤 (19:07抵達)',
        cost: '¥5,690',
        isPriority: true
      },
      {
        id: 'd6-food-1',
        time: '19:30',
        name: '村民食堂',
        type: SpotType.RESTAURANT,
        description: '晚餐：信州牛漢堡排。',
        tags: ['推薦'],
        tips: '11:30-21:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sonmin-Shokudo'
      },
      {
        id: 'd6-5',
        time: '21:00',
        name: 'APA Hotel Karuizawa-Ekimae',
        type: SpotType.HOTEL,
        description: '入住飯店 (Karuizawaso)。',
        isPriority: true
      },
      // Backups
      {
        id: 'd6-bk-1',
        time: '候補',
        name: '仙台站內壽司',
        type: SpotType.RESTAURANT,
        description: '午餐 (仙台站)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sendai+Station+Sushi'
      },
      {
        id: 'd6-bk-2',
        time: '候補',
        name: '輕井澤當地餐廳',
        type: SpotType.RESTAURANT,
        description: '當地料理 (11:30-20:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Restaurant'
      },
      {
        id: 'd6-bk-3',
        time: '候補',
        name: 'ずんだ小徑',
        type: SpotType.DESSERT,
        description: '毛豆甜點',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zunda+Komichi'
      },
      {
        id: 'd6-bk-4',
        time: '候補',
        name: 'Clinton St. Bakery',
        type: SpotType.DESSERT,
        description: '特色麵包蛋糕',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Clinton+St.+Bakery'
      }
    ]
  },
  {
    date: '01/19',
    dayOfWeek: 'Day 7',
    weather: { temp: '-3°C', condition: '降雪機率高', icon: '❄️' },
    hotel: {
      name: '輕井澤王子大飯店 西館',
      address: '輕井澤王子飯店西館',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Prince+Hotel+West'
    },
    spots: [
      {
        id: 'd7-1',
        time: '09:00',
        name: '輕井澤王子大飯店滑雪場',
        type: SpotType.SIGHTSEEING,
        description: '滑雪 / 1日券 ¥10,000 / 租裝備 ¥7000-9000。',
        cost: '¥10,000',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Prince+Hotel+Ski+Resort'
      },
      {
        id: 'd7-food-1',
        time: '12:00',
        name: '滑雪場內餐廳',
        type: SpotType.RESTAURANT,
        description: '午餐：建議自備零食或場內用餐。',
        tags: ['推薦'],
        tips: '08:00-17:00'
      },
      {
        id: 'd7-2',
        time: '13:00',
        name: '雲場池',
        type: SpotType.SIGHTSEEING,
        description: '冬季鏡湖雪景。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kumoba+Pond'
      },
      {
        id: 'd7-3',
        time: '14:00',
        name: '雪地徒步活動',
        type: SpotType.SIGHTSEEING,
        description: '滑雪場附近活動。'
      },
      {
        id: 'd7-food-2',
        time: '19:00',
        name: '腸詰屋',
        type: SpotType.RESTAURANT,
        description: '晚餐：德式香腸拼盤、自家釀啤酒。',
        tags: ['推薦'],
        tips: '10:00-18:00 (注意晚餐時間，可能需提早)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Chozumeya+Karuizawa'
      },
      {
        id: 'd7-4',
        time: '20:00',
        name: 'Karuizawa Prince Hotel West',
        type: SpotType.HOTEL,
        description: '入住飯店。',
        isPriority: true
      },
      // Backups
      {
        id: 'd7-bk-1',
        time: '候補',
        name: '輕井澤王子飯店餐廳',
        type: SpotType.RESTAURANT,
        description: '午餐 (08:30-16:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Prince+Hotel+Restaurant'
      },
      {
        id: 'd7-bk-2',
        time: '候補',
        name: '輕井澤燒肉店',
        type: SpotType.RESTAURANT,
        description: '燒肉 (11:30-22:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Yakiniku'
      },
      {
        id: 'd7-bk-3',
        time: '候補',
        name: '丸山咖啡',
        type: SpotType.DESSERT,
        description: '精品咖啡 (10:00-18:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Maruyama+Coffee'
      },
      {
        id: 'd7-bk-4',
        time: '候補',
        name: 'SUKE6 DINER',
        type: SpotType.DESSERT,
        description: '咖啡磅蛋糕 (08:00-18:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=SUKE6+DINER'
      }
    ]
  },
  {
    date: '01/20',
    dayOfWeek: 'Day 8',
    weather: { temp: '-4°C', condition: '雪地活動', icon: '🏂' },
    hotel: {
      name: '輕井澤王子大飯店 西館',
      address: '輕井澤王子飯店西館',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Prince+Hotel+West'
    },
    spots: [
      {
        id: 'd8-1',
        time: '09:00',
        name: 'Akakura Onsen 滑雪場',
        type: SpotType.SIGHTSEEING,
        description: '不同路線體驗。1日券 ¥10,000。',
        cost: '¥10,000',
        tips: '08:00-17:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Akakura+Onsen+Ski+Area'
      },
      {
        id: 'd8-food-1',
        time: '18:00',
        name: '川上庵 (Kawakami An)',
        type: SpotType.RESTAURANT,
        description: '晚餐：蕎麥麵、天婦羅。',
        tags: ['推薦'],
        tips: '11:00-22:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kawakami+An+Karuizawa'
      },
      {
        id: 'd8-2',
        time: '20:00',
        name: 'Karuizawa Prince Hotel West',
        type: SpotType.HOTEL,
        description: '返回飯店。',
        isPriority: true
      },
      // Backups
      {
        id: 'd8-bk-1',
        time: '候補',
        name: 'Bleston Court Yukawatan',
        type: SpotType.RESTAURANT,
        description: '法式料理 (11:30-15:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Bleston+Court+Yukawatan'
      }
    ]
  },
  {
    date: '01/21',
    dayOfWeek: 'Day 9',
    weather: { temp: '8°C', condition: '晴時多雲', icon: '🌤️' },
    hotel: {
      name: 'APA飯店 淺草田原町站前',
      address: '淺草田原町',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=APA+Hotel+Asakusa+Tawaramachi-Ekimae'
    },
    spots: [
      {
        id: 'd9-1',
        time: '09:00',
        name: '舊輕井澤銀座',
        type: SpotType.SHOPPING,
        description: '復古購物街。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Ginza'
      },
      {
        id: 'd9-2',
        time: '10:00',
        name: '聖保羅天主教堂',
        type: SpotType.SIGHTSEEING,
        description: '安東尼雷蒙設計。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=St.+Paul%27s+Catholic+Church+Karuizawa'
      },
      {
        id: 'd9-3',
        time: '10:00',
        name: '舊三笠飯店',
        type: SpotType.SIGHTSEEING,
        description: '重要文化財。',
        cost: '¥400',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Old+Mikasa+Hotel'
      },
      {
        id: 'd9-food-1',
        time: '11:00',
        name: '輕井澤法國麵包店',
        type: SpotType.RESTAURANT,
        description: '午餐：可頌、三明治。',
        tags: ['推薦'],
        tips: '08:00-17:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=French+Bakery+Karuizawa'
      },
      {
        id: 'd9-4',
        time: '12:00',
        name: '輕井澤王子購物廣場 (Outlet)',
        type: SpotType.SHOPPING,
        description: '自由購物。',
        tips: '10:00-20:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Prince+Shopping+Plaza'
      },
      {
        id: 'd9-5',
        time: '12:00',
        name: '雲場池 / 白絲瀑布',
        type: SpotType.SIGHTSEEING,
        description: '冰瀑 (若時間允許)。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Shiraito+Falls+Karuizawa'
      },
      {
        id: 'd9-6',
        time: '16:23',
        name: '前往東京 (新幹線)',
        type: SpotType.TRANSPORT,
        description: '輕井澤 -> 東京 (17:28抵達)。',
        cost: '¥6,020',
        isPriority: true
      },
      {
        id: 'd9-7',
        time: '17:40',
        name: '轉乘銀座線',
        type: SpotType.TRANSPORT,
        description: '往田原町 (淺草方向)。',
        cost: '¥330'
      },
      {
        id: 'd9-8',
        time: '18:00',
        name: '淺草寺 (夜訪)',
        type: SpotType.SIGHTSEEING,
        description: '夜間參拜散步。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Senso-ji'
      },
      {
        id: 'd9-food-2',
        time: '19:30',
        name: '淺草今半 國際通本店',
        type: SpotType.RESTAURANT,
        description: '晚餐：和牛壽喜燒。',
        tags: ['推薦', '老店'],
        tips: '11:30-20:30',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Asakusa+Imahan+Kokusai+Dori'
      },
      {
        id: 'd9-9',
        time: '21:00',
        name: 'APA Hotel Asakusa',
        type: SpotType.HOTEL,
        description: '入住飯店。',
        isPriority: true
      },
      // Backups
      {
        id: 'd9-bk-1',
        time: '候補',
        name: '大黑家天婦羅',
        type: SpotType.RESTAURANT,
        description: '天婦羅 (11:00-20:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Daikokuya+Tempura'
      },
      {
        id: 'd9-bk-2',
        time: '候補',
        name: '浅草今半别馆',
        type: SpotType.RESTAURANT,
        description: '壽喜燒 (11:00-20:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Asakusa+Imahan+Bekkan'
      },
      {
        id: 'd9-bk-3',
        time: '候補',
        name: 'Mikado Coffee',
        type: SpotType.DESSERT,
        description: 'Mocha軟霜淇淋',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Mikado+Coffee'
      },
      {
        id: 'd9-bk-4',
        time: '候補',
        name: 'Umezono 梅園',
        type: SpotType.DESSERT,
        description: '日式甜點 (10:00-17:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Asakusa+Umezono'
      },
      {
        id: 'd9-bk-5',
        time: '候補',
        name: '五代目野田巖',
        type: SpotType.DESSERT,
        description: '和果子/鰻魚 (11:00-20:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Nodaiwa+Azabu+Iikura'
      }
    ]
  },
  {
    date: '01/22',
    dayOfWeek: 'Day 10',
    weather: { temp: '6°C', condition: 'A/B方案', icon: '🗻' },
    hotel: {
      name: 'APA飯店 淺草田原町站前',
      address: '淺草田原町',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=APA+Hotel+Asakusa+Tawaramachi-Ekimae'
    },
    spots: [], // Filled dynamically by logic from plans
    plans: {
      'A': {
        label: '方案A：富士山',
        spots: [
          {
            id: 'd10-a-1',
            time: '07:30',
            name: '前往新宿 (銀座線+JR)',
            type: SpotType.TRANSPORT,
            description: '淺草 -> 新宿。',
            isPriority: true
          },
          {
            id: 'd10-a-2',
            time: '08:10',
            name: '高速巴士往河口湖',
            type: SpotType.TRANSPORT,
            description: '新宿 -> 河口湖 (10:10抵達)。',
            cost: '¥1,900',
            isPriority: true
          },
          {
            id: 'd10-a-3',
            time: '10:30',
            name: '河口湖遊覽船',
            type: SpotType.SIGHTSEEING,
            description: '遊湖觀賞富士山。',
            cost: '¥1,000',
            tips: '09:30起 (依班次)',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kawaguchiko+Sightseeing+Boat'
          },
          {
            id: 'd10-a-4',
            time: '11:30',
            name: '富士山全景纜車',
            type: SpotType.SIGHTSEEING,
            description: '天上山公園觀景台。',
            cost: '¥900',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Mt.+Fuji+Panoramic+Ropeway'
          },
          {
            id: 'd10-a-food-1',
            time: '12:30',
            name: 'ほうとう不動 河口湖北本店',
            type: SpotType.RESTAURANT,
            description: '午餐：味噌燉麵 (Hoto)。',
            tags: ['推薦'],
            tips: '11:00-20:00',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Hoto+Fudo+Kawaguchiko'
          },
          {
            id: 'd10-a-5',
            time: '14:00',
            name: '富士山五合目',
            type: SpotType.SIGHTSEEING,
            description: '觀景平台。',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Mt.+Fuji+5th+Station'
          },
          {
            id: 'd10-a-6',
            time: '14:00',
            name: '音樂之森美術館',
            type: SpotType.SIGHTSEEING,
            description: '歐式庭園 (若不去五合目)。',
            tips: '10:00-17:30',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kawaguchiko+Music+Forest'
          },
          {
            id: 'd10-a-food-2',
            time: '17:00',
            name: '湖波 (Konami)',
            type: SpotType.RESTAURANT,
            description: '晚餐：日式定食。',
            tags: ['推薦'],
            tips: '11:00-20:00',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Konami+Dining'
          },
          {
            id: 'd10-a-7',
            time: '21:00',
            name: 'APA Hotel Asakusa',
            type: SpotType.HOTEL,
            description: '返回東京飯店。',
            isPriority: true
          }
        ]
      },
      'B': {
        label: '方案B：東京市區',
        spots: [
           {
            id: 'd10-b-1',
            time: '09:00',
            name: '淺草寺',
            type: SpotType.SIGHTSEEING,
            description: '雷門、仲見世通。',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Senso-ji'
          },
          {
            id: 'd10-b-2',
            time: '12:00',
            name: '大黑家天婦羅',
            type: SpotType.RESTAURANT,
            description: '午餐：天丼。',
            tags: ['推薦'],
            tips: '11:00-20:00',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Daikokuya+Tempura'
          },
          {
            id: 'd10-b-3',
            time: '16:00',
            name: '東京站周邊 & 畫廊',
            type: SpotType.SIGHTSEEING,
            description: '皇居外苑、東京車站畫廊。',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Tokyo+Station'
          },
          {
            id: 'd10-b-4',
            time: '16:00',
            name: '日本橋 / 六本木之丘',
            type: SpotType.SIGHTSEEING,
            description: '商業區或觀景台。',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Roppongi+Hills'
          },
           {
            id: 'd10-b-5',
            time: '16:00',
            name: '築地市場外圍 / 台場',
            type: SpotType.SIGHTSEEING,
            description: '美食街或購物。',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Tsukiji+Outer+Market'
          },
          {
            id: 'd10-b-food-1',
            time: '19:00',
            name: '一蘭拉麵 淺草店',
            type: SpotType.RESTAURANT,
            description: '晚餐：豚骨拉麵。',
            tags: ['推薦'],
            tips: '09:30-22:00',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ichiran+Asakusa'
          },
          {
            id: 'd10-b-6',
            time: '21:00',
            name: 'APA Hotel Asakusa',
            type: SpotType.HOTEL,
            description: '返回飯店。',
            isPriority: true
          },
           {
            id: 'd10-b-bk-1',
            time: '候補',
            name: '邁泉 青山本店',
            type: SpotType.RESTAURANT,
            description: '豚汁定食 (11:00-21:00)',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Maisen+Aoyama'
          },
          {
            id: 'd10-b-bk-2',
            time: '候補',
            name: '東京站拉麵街',
            type: SpotType.RESTAURANT,
            description: '各式拉麵 (09:00-22:30)',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Tokyo+Ramen+Street'
          },
          {
            id: 'd10-b-bk-3',
            time: '候補',
            name: 'Harajuku Sweets Lab',
            type: SpotType.DESSERT,
            description: '甜點 (10:00-19:00)',
            locationUrl: 'https://www.google.com/maps/search/?api=1&query=Harajuku+Sweets+Lab'
          },
          {
             id: 'd10-b-bk-4',
             time: '候補',
             name: '敘敘苑 上野站前',
             type: SpotType.RESTAURANT,
             description: '和牛燒肉 (11:00-21:30)',
             locationUrl: 'https://www.google.com/maps/search/?api=1&query=Jojoen+Ueno'
          },
          {
             id: 'd10-b-bk-5',
             time: '候補',
             name: '俺的燒肉銀座9丁目',
             type: SpotType.RESTAURANT,
             description: '燒肉 (11:30-22:30)',
             locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ore+no+Yakiniku+Ginza'
          },
          {
             id: 'd10-b-bk-6',
             time: '候補',
             name: '東京芝豆腐屋UKAI',
             type: SpotType.RESTAURANT,
             description: '豆腐料理 (11:45-21:30)',
             locationUrl: 'https://www.google.com/maps/search/?api=1&query=Tofuya+Ukai'
          }
        ]
      }
    }
  },
  {
    date: '01/23',
    dayOfWeek: 'Day 11',
    weather: { temp: '7°C', condition: '多雲時晴', icon: '🌤️' },
    hotel: {
      name: 'APA飯店 淺草田原町站前',
      address: '淺草田原町',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=APA+Hotel+Asakusa+Tawaramachi-Ekimae'
    },
    spots: [
      {
        id: 'd11-1',
        time: '08:30',
        name: '前往川越',
        type: SpotType.TRANSPORT,
        description: '東武線/JR埼京線。淺草 -> 川越 (約1小時)。',
        tips: '08:30出發 -> 09:40抵達'
      },
      {
        id: 'd11-2',
        time: '10:00',
        name: '小江戶川越 一番街',
        type: SpotType.SIGHTSEEING,
        description: '藏造老屋街道，江戶建築群。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kawagoe+Ichibangai'
      },
      {
        id: 'd11-3',
        time: '10:30',
        name: '時之鐘',
        type: SpotType.SIGHTSEEING,
        description: '地標鐘樓，每日鳴鐘四次。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Toki+no+Kane'
      },
      {
        id: 'd11-4',
        time: '11:00',
        name: '菓子屋橫丁',
        type: SpotType.SIGHTSEEING,
        description: '傳統糖果街。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kashiya+Yokocho'
      },
      {
        id: 'd11-food-1',
        time: '12:00',
        name: '小川菊 (Ogakiku)',
        type: SpotType.RESTAURANT,
        description: '午餐：鰻魚飯 (百年老店)。',
        tags: ['推薦'],
        tips: '11:00-19:00',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ogakiku+Kawagoe'
      },
      {
        id: 'd11-5',
        time: '13:30',
        name: '川越冰川神社',
        type: SpotType.SIGHTSEEING,
        description: '結緣神社，免費釣鯛魚籤。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kawagoe+Hikawa+Shrine'
      },
      {
        id: 'd11-6',
        time: '14:30',
        name: '喜多院',
        type: SpotType.SIGHTSEEING,
        description: '江戶城遺構。',
        cost: '¥400',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kitain+Temple'
      },
      {
        id: 'd11-7',
        time: '15:30',
        name: '大正浪漫夢通 / 成田山別院',
        type: SpotType.SIGHTSEEING,
        description: '大正建築風格與寧靜寺院。'
      },
      {
        id: 'd11-food-2',
        time: '18:00',
        name: '陶路子 (Torokko)',
        type: SpotType.RESTAURANT,
        description: '晚餐：川越季節料理。',
        tags: ['推薦'],
        tips: '10:00-16:30 (注意時間)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Torokko+Kawagoe'
      },
      {
        id: 'd11-8',
        time: '20:00',
        name: 'APA Hotel Asakusa',
        type: SpotType.HOTEL,
        description: '返回飯店。',
        isPriority: true
      },
      // Backups
      {
        id: 'd11-bk-1',
        time: '候補',
        name: '川越いちのや (Ichinoya)',
        type: SpotType.RESTAURANT,
        description: '鰻魚重 (11:00-20:20)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ichinoya+Kawagoe'
      },
      {
        id: 'd11-bk-2',
        time: '候補',
        name: 'Izuei Main Restaurant',
        type: SpotType.RESTAURANT,
        description: '鰻魚飯 (11:00-21:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Izuei+Honten'
      },
      {
        id: 'd11-bk-3',
        time: '候補',
        name: '神谷Bar',
        type: SpotType.RESTAURANT,
        description: '電氣白蘭地 (11:00-19:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kamiya+Bar'
      },
      {
        id: 'd11-bk-4',
        time: '候補',
        name: '淺草米久本店',
        type: SpotType.RESTAURANT,
        description: '壽喜燒 (12:00-20:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Yonekyu+Honten'
      },
      {
        id: 'd11-bk-5',
        time: '候補',
        name: '与ろゐ屋',
        type: SpotType.RESTAURANT,
        description: '拉麵 (11:00-20:30)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Yoroiya+Ramen'
      },
      {
        id: 'd11-bk-6',
        time: '候補',
        name: '麺 みつヰ',
        type: SpotType.RESTAURANT,
        description: '拉麵 (18:00-20:00)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Men+Mitsui'
      },
      {
        id: 'd11-bk-7',
        time: '候補',
        name: '龜屋 時之鐘店',
        type: SpotType.DESSERT,
        description: '龜最中',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kameya+Toki+no+Kane'
      },
      {
        id: 'd11-bk-8',
        time: '候補',
        name: '川越布丁',
        type: SpotType.DESSERT,
        description: '手工布丁',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kawagoe+Pudding'
      },
      {
        id: 'd11-bk-9',
        time: '候補',
        name: '菓匠 右門',
        type: SpotType.DESSERT,
        description: '地瓜饅頭',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kasho+Umon'
      },
      {
        id: 'd11-bk-10',
        time: '候補',
        name: '小江戸おさつ庵',
        type: SpotType.DESSERT,
        description: '炸地瓜片',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Koedo+Osatsuan'
      },
      {
        id: 'd11-bk-11',
        time: '候補',
        name: '川越ん家',
        type: SpotType.DESSERT,
        description: '抹茶冰淇淋',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kawagoenchi'
      }
    ]
  },
  {
    date: '01/24',
    dayOfWeek: 'Day 12',
    weather: { temp: '8°C', condition: '返程', icon: '✈️' },
    hotel: {
      name: '返程',
      address: '成田機場',
      mapUrl: ''
    },
    spots: [
      {
        id: 'd12-1',
        time: '09:00',
        name: '淺草寺',
        type: SpotType.SIGHTSEEING,
        description: '清晨氛圍。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Senso-ji'
      },
      {
        id: 'd12-2',
        time: '09:00',
        name: '仲見世通',
        type: SpotType.SHOPPING,
        description: '購買最後伴手禮。',
        tips: '09:00-20:00'
      },
      {
        id: 'd12-3',
        time: '10:30',
        name: '淺草超市 / 唐吉訶德',
        type: SpotType.SHOPPING,
        description: '補貨購物。',
        tips: '唐吉訶德10:00-22:00'
      },
      {
        id: 'd12-4',
        time: '11:30',
        name: '前往成田機場',
        type: SpotType.TRANSPORT,
        description: '淺草(都營) -> 押上(轉乘Skyliner) -> 成田機場。',
        cost: '¥2,700',
        tips: '約1.5小時。預計13:00前抵達T2。'
      },
      {
        id: 'd12-5',
        time: '14:35',
        name: '搭機返台',
        type: SpotType.TRANSPORT,
        description: 'CI101 (14:35 - 17:45)。',
        isPriority: true
      },
      // Backups
      {
        id: 'd12-bk-1',
        time: '候補',
        name: '人形燒 / 雷おこし',
        type: SpotType.DESSERT,
        description: '伴手禮',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ningyo-yaki'
      },
      {
        id: 'd12-bk-2',
        time: '候補',
        name: '機場用餐',
        type: SpotType.RESTAURANT,
        description: '午餐',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Narita+Airport+Restaurants'
      }
    ]
  }
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  // Important
  { id: 'imp-1', category: '重要證件/金錢', text: '護照', checked: false },
  { id: 'imp-2', category: '重要證件/金錢', text: '國際駕照', checked: false },
  { id: 'imp-3', category: '重要證件/金錢', text: '國際駕照譯本', checked: false },
  { id: 'imp-4', category: '重要證件/金錢', text: '機票', checked: false },
  { id: 'imp-5', category: '重要證件/金錢', text: '簽證', checked: false },
  { id: 'imp-6', category: '重要證件/金錢', text: '錢包(現金/提款卡)', checked: false },
  { id: 'imp-7', category: '重要證件/金錢', text: '手機', checked: false },
  { id: 'imp-8', category: '重要證件/金錢', text: '鑰匙', checked: false },
  { id: 'imp-9', category: '重要證件/金錢', text: '飯店預約單', checked: false },
  { id: 'imp-10', category: '重要證件/金錢', text: '機票證明', checked: false },
  { id: 'imp-11', category: '重要證件/金錢', text: '網卡 / Esim', checked: false },

  // Clothing
  { id: 'cloth-1', category: '衣物 (留意天氣)', text: '上衣', checked: false },
  { id: 'cloth-2', category: '衣物 (留意天氣)', text: '褲子', checked: false },
  { id: 'cloth-3', category: '衣物 (留意天氣)', text: '外套', checked: false },
  { id: 'cloth-4', category: '衣物 (留意天氣)', text: '厚外套', checked: false },
  { id: 'cloth-5', category: '衣物 (留意天氣)', text: '內衣', checked: false },
  { id: 'cloth-6', category: '衣物 (留意天氣)', text: '內褲', checked: false },
  { id: 'cloth-7', category: '衣物 (留意天氣)', text: '睡衣睡褲', checked: false },
  { id: 'cloth-8', category: '衣物 (留意天氣)', text: '襪子', checked: false },
  { id: 'cloth-9', category: '衣物 (留意天氣)', text: '鞋子', checked: false },
  { id: 'cloth-10', category: '衣物 (留意天氣)', text: '拖鞋', checked: false },
  { id: 'cloth-11', category: '衣物 (留意天氣)', text: '帽子', checked: false },
  { id: 'cloth-12', category: '衣物 (留意天氣)', text: '圍巾', checked: false },

  // Electronics
  { id: 'elec-1', category: '電器', text: '行動電源', checked: false },
  { id: 'elec-2', category: '電器', text: 'Type-C充電線', checked: false },
  { id: 'elec-3', category: '電器', text: 'Lighting充電線', checked: false },
  { id: 'elec-4', category: '電器', text: '手錶充電器', checked: false },
  { id: 'elec-5', category: '電器', text: '快充頭', checked: false },
  { id: 'elec-6', category: '電器', text: '耳機', checked: false },
  { id: 'elec-7', category: '電器', text: '萬用插頭', checked: false },
  { id: 'elec-8', category: '電器', text: '變壓器', checked: false },
  { id: 'elec-9', category: '電器', text: 'iPad', checked: false },
  { id: 'elec-10', category: '電器', text: '筆電', checked: false },

  // Toiletries
  { id: 'toil-1', category: '盥洗用品', text: '牙刷', checked: false },
  { id: 'toil-2', category: '盥洗用品', text: '牙膏', checked: false },
  { id: 'toil-3', category: '盥洗用品', text: '洗面乳', checked: false },
  { id: 'toil-4', category: '盥洗用品', text: '棉花棒', checked: false },
  { id: 'toil-5', category: '盥洗用品', text: '衛生棉', checked: false },
  { id: 'toil-6', category: '盥洗用品', text: '刮鬍刀', checked: false },
  { id: 'toil-7', category: '盥洗用品', text: '梳子', checked: false },

  // Others
  { id: 'oth-1', category: '其他', text: '眼鏡', checked: false },
  { id: 'oth-2', category: '其他', text: '太陽眼鏡', checked: false },
  { id: 'oth-3', category: '其他', text: '眼鏡盒', checked: false },
  { id: 'oth-4', category: '其他', text: '水壺', checked: false },
  { id: 'oth-5', category: '其他', text: '筆', checked: false },
  { id: 'oth-6', category: '其他', text: '錶帶', checked: false },
  { id: 'oth-7', category: '其他', text: '手機殼', checked: false },
  { id: 'oth-8', category: '其他', text: '卡針', checked: false },
  { id: 'oth-9', category: '其他', text: '暖暖包', checked: false },
  { id: 'oth-10', category: '其他', text: '行李秤', checked: false },
  { id: 'oth-11', category: '其他', text: '雨傘', checked: false },

  // Ski
  { id: 'ski-1', category: '滑雪用具', text: '雪鏡', checked: false },
  { id: 'ski-2', category: '滑雪用具', text: '面罩', checked: false },
  { id: 'ski-3', category: '滑雪用具', text: '透氣內衣', checked: false },
  { id: 'ski-4', category: '滑雪用具', text: '羽絨外套', checked: false },
  { id: 'ski-5', category: '滑雪用具', text: '發熱衣', checked: false },
  { id: 'ski-6', category: '滑雪用具', text: '雪褲', checked: false },
  { id: 'ski-7', category: '滑雪用具', text: '厚襪子', checked: false },
  { id: 'ski-8', category: '滑雪用具', text: '手套', checked: false },

  // Tim
  { id: 'tim-1', category: 'Tim的寶貝相機', text: '相機', checked: false },
  { id: 'tim-2', category: 'Tim的寶貝相機', text: '相機電池', checked: false },
  { id: 'tim-3', category: 'Tim的寶貝相機', text: '鏡頭（斟酌）', checked: false },
  { id: 'tim-4', category: 'Tim的寶貝相機', text: '記憶卡', checked: false },
  { id: 'tim-5', category: 'Tim的寶貝相機', text: '相機充電器', checked: false },
  { id: 'tim-6', category: 'Tim的寶貝相機', text: '小腳架', checked: false },
  { id: 'tim-7', category: 'Tim的寶貝相機', text: '大腳架', checked: false },
  { id: 'tim-8', category: 'Tim的寶貝相機', text: '怪手', checked: false },
  { id: 'tim-9', category: 'Tim的寶貝相機', text: '吸盤', checked: false },
  { id: 'tim-10', category: 'Tim的寶貝相機', text: '玻璃遮光罩', checked: false },
  { id: 'tim-11', category: 'Tim的寶貝相機', text: 'GO ULTRA', checked: false },
  { id: 'tim-12', category: 'Tim的寶貝相機', text: '樓上的配件', checked: false },
  { id: 'tim-13', category: 'Tim的寶貝相機', text: '小工具', checked: false },

  // Anna
  { id: 'anna-1', category: 'Anna的寶貝化妝品', text: '防曬乳', checked: false },
  { id: 'anna-2', category: 'Anna的寶貝化妝品', text: '護唇膏', checked: false },
  { id: 'anna-3', category: 'Anna的寶貝化妝品', text: '化妝品', checked: false },
  { id: 'anna-4', category: 'Anna的寶貝化妝品', text: '卸妝用品', checked: false },
  { id: 'anna-5', category: 'Anna的寶貝化妝品', text: '乳液/護手霜', checked: false },
  { id: 'anna-6', category: 'Anna的寶貝化妝品', text: '臉部保養品', checked: false },
  { id: 'anna-7', category: 'Anna的寶貝化妝品', text: '隱形眼鏡', checked: false },
  { id: 'anna-8', category: 'Anna的寶貝化妝品', text: '香水', checked: false },
  { id: 'anna-9', category: 'Anna的寶貝化妝品', text: '飾品', checked: false },
  { id: 'anna-10', category: 'Anna的寶貝化妝品', text: '拔毛夾', checked: false },
];
