import AnAmericanInParis from './img/一个美国人在巴黎.png'
import ItHappenedOneNight from './img/一夜风流.png'
import Unforgiven from './img/不可饶恕.png'
import GoingMyWay from './img/与我同行.png'
import DancesWithWolves from './img/与狼共舞.png'
import TwelveYearsASlave from './img/为奴十二年.png'
import DrivingMissDaisy from './img/为黛西小姐开车.png'
import GoneWithTheWind from './img/乱世佳人.png'
import FromHereToEternity from './img/乱世忠魂.png'
import Cavalcade from './img/乱世春秋.png'
import CODA from './img/健听女孩.png'
import KramerVsKramer from './img/克莱默夫妇.png'
import Braveheart from './img/勇敢的心.png'
import MidnightCowboy from './img/午夜牛郎.png'
import Casablanca from './img/卡萨布兰卡.png'
import MutinyOnTheBounty from './img/叛舰喋血记.png'
import GentlemansAgreement from './img/君子协定.png'
import Marty from './img/君子好逑.png'
import TheKingsSpeech from './img/国王的演讲.png'
import Cimarron from './img/壮志千秋.png'
import GrandHotel from './img/大饭店.png'
import TheLostWeekend from './img/失去的周末.png'
import Oppenheimer from './img/奥本海默.png'
import AnnieHall from './img/安妮·霍尔.png'
import BenHur from './img/宾虚.png'
import 기생충 from './img/寄生虫.png'
import TheLifeOfEmileZola from './img/左拉传.png'
import Patton from './img/巴顿将军.png'
import AllTheKingsMen from './img/当代奸雄.png'
import AllAboutEve from './img/彗星美人.png'
import MrsMiniver from './img/忠勇之家.png'
import TheGreatestShowOnEarth from './img/戏王之王.png'
import TheHurtLocker from './img/拆弹部队.png'
import TheLordOfTheRingsTheReturnOfTheKing from './img/指环王3：王者无敌.png'
import Crash from './img/撞车.png'
import TheGodfatherPartII from './img/教父2.png'
import TheGodfather from './img/教父.png'
import Nomadland from './img/无依之地.png'
import TheDeparted from './img/无间道风云.png'
import AManForAllSeasons from './img/日月精忠.png'
import OrdinaryPeople from './img/普通人.png'
import Moonlight from './img/月光男孩.png'
import TheLastEmperor from './img/末代皇帝.png'
import TheBridgeOnTheRiverKwai from './img/桂河大桥.png'
import TheApartment from './img/桃色公寓.png'
import TheGreatZiegfeld from './img/歌舞大王齐格飞.png'
import TermsOfEndearment from './img/母女情深.png'
import TheShapeOfWater from './img/水形物语.png'
import TomJones from './img/汤姆·琼斯.png'
import TheSilenceOfTheLambs from './img/沉默的羔羊.png'
import TheFrenchConnection from './img/法国贩毒网.png'
import Titanic from './img/泰坦尼克号.png'
import Rocky from './img/洛奇.png'
import YouCantTakeItWithYou from './img/浮生若梦.png'
import InTheHeatOfTheNight from './img/炎热的夜晚.png'
import ChariotsOfFire from './img/烈火战车.png'
import TheDeerHunter from './img/猎鹿人.png'
import Hamlet from './img/王子复仇记.png'
import AroundTheWorldInEightyDays from './img/环游世界八十天.png'
import Gandhi from './img/甘地传.png'
import MillionDollarBaby from './img/百万美元宝贝.png'
import TheBroadwayMelody from './img/百老汇旋律.png'
import EverythingEverywhereAllAtOnce from './img/瞬息全宇宙.png'
import OnTheWaterfront from './img/码头风云.png'
import MyFairLady from './img/窈窕淑女.png'
import GreenBook from './img/绿皮书.png'
import ABeautifulMind from './img/美丽心灵.png'
import AmericanBeauty from './img/美国丽人.png'
import Wings from './img/翼.png'
import NoCountryForOldMen from './img/老无所依.png'
import Spotlight from './img/聚焦.png'
import TheArtist from './img/艺术家.png'
import Chicago from './img/芝加哥.png'
import TheEnglishPatient from './img/英国病人.png'
import ShakespeareInLove from './img/莎翁情史.png'
import Amadeus from './img/莫扎特传.png'
import Rebecca from './img/蝴蝶梦.png'
import WestSideStory from './img/西区故事.png'
import AllQuietOnTheWesternFront from './img/西线无战事.png'
import Gladiator from './img/角斗士.png'
import SlumdogMillionaire from './img/贫民窟的百万富翁.png'
import OutOfAfrica from './img/走出非洲.png'
import SchindlersList from './img/辛德勒的名单.png'
import Argo from './img/逃离德黑兰.png'
import Platoon from './img/野战排.png'
import Gigi from './img/金粉世界.png'
import LawrenceOfArabia from './img/阿拉伯的劳伦斯.png'
import ForrestGump from './img/阿甘正传.png'
import Anora from './img/阿诺拉.png'
import RainMan from './img/雨人.png'
import Oliver from './img/雾都孤儿.png'
import HowGreenWasMyValley from './img/青山翠谷.png'
import TheSoundOfMusic from './img/音乐之声.png'
import OneFlewOverTheCuckoosNest from './img/飞越疯人院.png'
import TheSting from './img/骗中骗.png'
import BirdmanOrTheUnexpectedVirtueOfIgnorance from './img/鸟人.png'
import TheBestYearsOfOurLives from './img/黄金时代.png'

export interface Movie {
  checked?: boolean
  title: string
  name: string
  poster: string
  abstract: string
  intro: string
}

const IMG = {
  阿诺拉: Anora,
  奥本海默: Oppenheimer,
  瞬息全宇宙: EverythingEverywhereAllAtOnce,
  健听女孩: CODA,
  无依之地: Nomadland,
  寄生虫: 기생충,
  绿皮书: GreenBook,
  水形物语: TheShapeOfWater,
  月光男孩: Moonlight,
  聚焦: Spotlight,
  鸟人: BirdmanOrTheUnexpectedVirtueOfIgnorance,
  为奴十二年: TwelveYearsASlave,
  逃离德黑兰: Argo,
  艺术家: TheArtist,
  国王的演讲: TheKingsSpeech,
  拆弹部队: TheHurtLocker,
  贫民窟的百万富翁: SlumdogMillionaire,
  老无所依: NoCountryForOldMen,
  无间道风云: TheDeparted,
  撞车: Crash,
  百万美元宝贝: MillionDollarBaby,
  '指环王3：王者无敌': TheLordOfTheRingsTheReturnOfTheKing,
  芝加哥: Chicago,
  美丽心灵: ABeautifulMind,
  角斗士: Gladiator,
  美国丽人: AmericanBeauty,
  莎翁情史: ShakespeareInLove,
  泰坦尼克号: Titanic,
  英国病人: TheEnglishPatient,
  勇敢的心: Braveheart,
  阿甘正传: ForrestGump,
  辛德勒的名单: SchindlersList,
  不可饶恕: Unforgiven,
  沉默的羔羊: TheSilenceOfTheLambs,
  与狼共舞: DancesWithWolves,
  为黛西小姐开车: DrivingMissDaisy,
  雨人: RainMan,
  末代皇帝: TheLastEmperor,
  野战排: Platoon,
  走出非洲: OutOfAfrica,
  莫扎特传: Amadeus,
  母女情深: TermsOfEndearment,
  甘地传: Gandhi,
  烈火战车: ChariotsOfFire,
  普通人: OrdinaryPeople,
  克莱默夫妇: KramerVsKramer,
  猎鹿人: TheDeerHunter,
  '安妮·霍尔': AnnieHall,
  洛奇: Rocky,
  飞越疯人院: OneFlewOverTheCuckoosNest,
  教父2: TheGodfatherPartII,
  骗中骗: TheSting,
  教父: TheGodfather,
  法国贩毒网: TheFrenchConnection,
  巴顿将军: Patton,
  午夜牛郎: MidnightCowboy,
  雾都孤儿: Oliver,
  炎热的夜晚: InTheHeatOfTheNight,
  日月精忠: AManForAllSeasons,
  音乐之声: TheSoundOfMusic,
  窈窕淑女: MyFairLady,
  '汤姆·琼斯': TomJones,
  阿拉伯的劳伦斯: LawrenceOfArabia,
  西区故事: WestSideStory,
  桃色公寓: TheApartment,
  宾虚: BenHur,
  金粉世界: Gigi,
  桂河大桥: TheBridgeOnTheRiverKwai,
  环游世界八十天: AroundTheWorldInEightyDays,
  君子好逑: Marty,
  码头风云: OnTheWaterfront,
  乱世忠魂: FromHereToEternity,
  戏王之王: TheGreatestShowOnEarth,
  一个美国人在巴黎: AnAmericanInParis,
  彗星美人: AllAboutEve,
  当代奸雄: AllTheKingsMen,
  王子复仇记: Hamlet,
  君子协定: GentlemansAgreement,
  黄金时代: TheBestYearsOfOurLives,
  失去的周末: TheLostWeekend,
  与我同行: GoingMyWay,
  卡萨布兰卡: Casablanca,
  忠勇之家: MrsMiniver,
  青山翠谷: HowGreenWasMyValley,
  蝴蝶梦: Rebecca,
  乱世佳人: GoneWithTheWind,
  浮生若梦: YouCantTakeItWithYou,
  左拉传: TheLifeOfEmileZola,
  歌舞大王齐格飞: TheGreatZiegfeld,
  叛舰喋血记: MutinyOnTheBounty,
  一夜风流: ItHappenedOneNight,
  乱世春秋: Cavalcade,
  大饭店: GrandHotel,
  壮志千秋: Cimarron,
  西线无战事: AllQuietOnTheWesternFront,
  百老汇旋律: TheBroadwayMelody,
  翼: Wings
} as any // eslint-disable-line @typescript-eslint/no-explicit-any

export function getImgUrl(imgName: string) {
  return IMG[imgName.replace(/^(([\u4e00-\u9fa5]|·|\d)+).*/, '$1')] as string
}
