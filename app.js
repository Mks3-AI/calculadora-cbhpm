// Calculadora de Honorários CHM 2018
// React component - full app

var _react = React;
var useState = React.useState;
var useCallback = React.useCallback;
var useMemo = React.useMemo;
var useRef = React.useRef;

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var PV = {
  "0": 0, "1A": 19.84, "1B": 39.68, "1C": 59.53, "2A": 79.38, "2B": 104.64, "2C": 143.81,
  "3A": 202.37, "3B": 262.10, "3C": 310.38, "4A": 370.21, "4B": 415.83, "4C": 471.79,
  "5A": 517.41, "5B": 565.61, "5C": 609.95, "6A": 664.61, "6B": 725.73, "6C": 788.15,
  "7A": 847.97, "7B": 923.29, "7C": 1043.81, "8A": 1117.84, "8B": 1175.10, "8C": 1242.67,
  "9A": 1314.12, "9B": 1412.69, "9C": 1525.45, "10A": 1620.15, "10B": 1730.34, "10C": 1876.68,
  "11A": 1972.66, "11B": 2122.89, "11C": 2286.02, "12A": 2367.80, "12B": 2514.15, "12C": 2930.37,
  "13A": 3169.69, "13B": 3421.92, "13C": 3719.35, "14A": 4069.72, "14B": 4373.61, "14C": 4753.67
};
var AV = { 0: 0, 1: 202.37, 2: 310.38, 3: 471.79, 4: 725.73, 5: 1043.81, 6: 1412.69, 7: 1876.68, 8: 2367.80 };
var GP = { 1: 0.60, 2: 0.40, 3: 0.30, 4: 0.30 };
var UCO = 20.47;
var pv = function pv(p, u) { var _PV$p; return ((_PV$p = PV[p]) !== null && _PV$p !== void 0 ? _PV$p : 0) + (u || 0) * UCO; };
var brl = function brl(v) { return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); };

var DBR = [["30101972","Abdominoplastia pós-bariátrica","10A",0,5,2],["30101018","Abrasão cirúrgica (por sessão)","3C",0,2,0],["30101930","Abscesso de unha (drenagem) – tratamento cirúrgico","2B",0,0,0],["30101026","Alopecia parcial – exérese e sutura","4C",0,3,1],["30101034","Alopecia parcial – rotação de retalho","5B",0,3,1],["30101042","Alopecia parcial – rotação múltipla de retalhos","8C",0,3,2],["30101050","Apêndice pré-auricular – ressecção","4A",0,4,1],["30101069","Autonomização de retalho – por estágio","5B",0,2,1],["30101077","Biópsia de pele, tumores superficiais, tecido celular subcutâneo, linfonodo superficial, etc.","2B",0,0,1],["30101085","Biópsia de unha","2B",0,0,0],["30101093","Calosidade e/ou mal perfurante – desbastamento (por lesão)","1B",0,0,0],["30101948","Cantoplastia ungueal","3A",0,2,1],["30101107","Cauterização química (por grupo de até 5 lesões)","2A",0,0,0],["30101115","Cirurgia da hidrosadenite (por região)","5B",0,3,1],["30101140","Correção cirúrgica de linfedema (por estágio)","9C",0,4,2],["30101158","Correção cirúrgica de sequelas de alopecia traumática com microenxertos pilosos (por região)","6A",0,5,1],["30101166","Correção de deformidades nos membros com utilização de implantes","9B",0,6,2],["30101174","Correção de deformidades por exérese de tumores, cicatrizes ou ferimentos com o emprego de expansores em retalhos","9B",0,4,2],["30101182","Correção de deformidades por exérese de tumores, cicatrizes ou ferimentos, com o emprego de expansores de tecido, em","9B",0,4,2],["30101190","Correção de lipodistrofia braquial, crural ou trocanteriana de membros superiores e inferiores","9A",0,4,2],["30101204","Criocirurgia (nitrogênio líquido) de neoplasias cutâneas","3B",0,2,0],["30101212","Curativo de queimaduras – por unidade topográfica (UT) ambulatorial","1C",0,1,0],["30101220","Curativo de queimaduras – por unidade topográfica (UT) hospitalar","2C",0,1,0],["30101239","Curativo especial sob anestesia – por unidade topográfica (UT)","2C",0,1,0],["30101247","Curetagem e eletrocoagulação de CA de pele (por lesão)","3A",0,0,0],["30101255","Curetagem simples de lesões de pele (por grupo de até 5 lesões)","2A",0,0,0],["30101263","Dermoabrasão de lesões cutâneas","4C",0,0,0],["30101999","Dermolipectomia dos membros inferiores – coxoplastia pós-bariátrica","9B",0,5,2],["30101980","Dermolipectomia dos membros superiores – braquioplastia pós-bariátrica","9B",0,5,2],["30101271","Dermolipectomia para correção de abdome em avental","9C",0,5,2],["30101280","Desbridamento cirúrgico – por unidade topográfica (UT)","3C",0,2,0],["30101298","Eletrocoagulação de lesões de pele e mucosas – com ou sem curetagem (por grupo de até 5 lesões)","2C",0,0,0],["30101301","Enxerto cartilaginoso","5B",0,2,1],["30101310","Enxerto composto","5B",0,2,1],["30101328","Enxerto de mucosa","5B",0,2,1],["30101336","Enxerto de pele (homoenxerto inclusive)","5B",0,2,2],["30101344","Enxerto de pele múltiplo – por unidade topográfica (UT)","5B",0,2,2],["30101352","Epilação por eletrólise (por sessão)","2A",0,0,0],["30101360","Escalpo parcial – tratamento cirúrgico","6A",0,4,2],["30101379","Escalpo total – tratamento cirúrgico","9B",0,5,2],["30101387","Escarectomia descompressiva – (pele e estruturas profundas) – por unidade topográfica (UT)","3B",0,2,0],["30101395","Esfoliação química média (por sessão)","3C",0,0,0],["30101409","Esfoliação química profunda (por sessão)","4A",0,0,0],["30101417","Esfoliação química superficial (por sessão)","3A",0,0,0],["30101425","Exérese de higroma cístico","9A",0,3,1],["30101433","Exérese de higroma cístico no RN e lactente","11C",0,5,2],["30101468","Exérese de lesão / tumor de pele e mucosas","3C",0,0,1],["30101441","Exérese de lesão com autoenxertia","5C",0,2,1],["30101476","Exérese de tumor e rotação de retalho músculo-cutâneo","5B",0,2,1],["30101484","Exérese de unha","2B",0,0,0],["30101921","Exérese e sutura de hemangioma, linfangioma ou nevus (por grupo de até 5 lesões)","3B",0,0,1],["30101450","Exérese e sutura de lesões (circulares ou não) com rotação de retalhos cutâneos","5A",0,2,1],["30101492","Exérese e sutura simples de pequenas lesões (por grupo de até 5 lesões)","3B",0,0,0],["30101506","Exérese tangencial (shaving) – (por grupo de até 5 lesões)","2C",0,2,0],["30101514","Expansão tissular (por sessão)","1C",0,2,0],["30101522","Extensos ferimentos, cicatrizes ou tumores – excisão e retalhos cutâneos da região","8B",0,3,1],["30101530","Extensos ferimentos, cicatrizes ou tumores – exérese e emprego de retalhos cutâneos ou musculares cruzados (por estágio)","9B",0,4,1],["30101549","Extensos ferimentos, cicatrizes ou tumores – exérese e retalhos cutâneos a distância","9B",0,4,1],["30101557","Extensos ferimentos, cicatrizes ou tumores – exérese e rotação de retalho fasciocutâneo ou axial","9B",0,4,1],["30101565","Extensos ferimentos, cicatrizes ou tumores – exérese e rotação de retalhos miocutâneos","9A",0,4,1],["30101573","Extensos ferimentos, cicatrizes ou tumores – exérese e rotação de retalhos musculares","9A",0,4,1],["30101581","Extensos ferimentos, cicatrizes, ou tumores – exérese e enxerto cutâneo","8A",0,3,1],["30101590","Face – biópsia","3B",0,0,0],["30101603","Ferimentos infectados e mordidas de animais (desbridamento)","2B",0,2,1],["30101620","Incisão e drenagem de abscesso, hematoma ou panarício","2B",0,0,0],["30101638","Incisão e drenagem de flegmão","3A",0,0,0],["30101611","Incisão e drenagem de tenossinovites purulentas","3B",0,2,1],["30101646","Infiltração intralesional, cicatricial e hemangiomas – por sessão","1C",0,0,0],["30101654","Lasercirurgia (por sessão)","4B",0,2,0],["30101662","Matricectomia por dobra ungueal","3A",0,0,0],["30101670","Plástica em Z ou W","4A",0,2,1],["30101689","Reconstrução com retalhos de gálea aponeurótica","8C",0,5,2],["30101697","Retalho composto (incluindo cartilagem ou osso)","8C",0,5,2],["30101719","Retalho muscular ou miocutâneo","10A",0,5,2],["30101735","Retirada de corpo estranho subcutâneo","2C",0,0,0],["30101743","Retração cicatricial de axila – tratamento cirúrgico","5B",0,3,2],["30101751","Retração cicatricial de zona de flexão e extensão de membros superiores e inferiores","5B",0,3,1],["30101760","Retração cicatricial do cotovelo – tratamento cirúrgico","5B",0,3,2],["30101778","Retração de aponevrose palmar (Dupuytren)","5B",0,3,1],["30101786","Sutura de extensos ferimentos com ou sem desbridamento","5B",0,3,1],["30101794","Sutura de pequenos ferimentos com ou sem desbridamento","2B",0,0,0],["30102014","Terapia de pressão negativa - cirúrgica","5A",0,2,1],["30101808","Transecção de retalho","5B",0,3,1],["30101816","Transferência intermediária de retalho","5B",0,3,1],["30101824","Tratamento cirúrgico de bridas constrictivas","9A",0,3,1],["30101832","Tratamento cirúrgico de grandes hemangiomas","9C",0,4,2],["30101840","Tratamento da miiase furunculoide (por lesão)","2C",0,0,0],["30101859","Tratamento de anomalias pilosas a laser/photoderm – por sessão","2A",0,2,0],["30101867","Tratamento de escaras ou ulcerações com enxerto de pele","9A",0,4,1],["30101875","Tratamento de escaras ou ulcerações com retalhos cutâneos locais","9A",0,4,1],["30101883","Tratamento de escaras ou ulcerações com retalhos miocutâneos ou musculares","9B",0,5,1],["30101891","Tratamento de fístula cutânea","3B",0,2,0],["30101905","Tratamento de lesões cutâneas e vasculares a laser/photoderm – por sessão","2A",0,2,0],["30101913","TU partes moles – exérese","4A",0,1,1],["30101956","Unha (enxerto) – tratamento cirúrgico","2B",0,2,1],["30701015","Abdominal ou hipogástrico","12C",0,6,2],["30701023","Antebraço","13A",0,6,2],["30701031","Axilar","12C",0,6,2],["30701040","Couro cabeludo","12C",0,6,2],["30701058","Deltopeitoral","12C",0,6,2],["30701066","Digitais (da face volar e látero-cubital dos dedos médio e anular da mão)","12C",0,5,2],["30701074","Digital do hallux","12B",0,5,1],["30701082","Dorsal do pé","12C",0,6,2],["30701090","Escapular","12C",0,6,2],["30701104","Femoral","12B",0,6,2],["30701112","Fossa poplítea","12B",0,6,2],["30701120","Inguino-cural","12C",0,6,2],["30701139","Intercostal","12B",0,6,2],["30701147","Interdigital da 1ª comissura dos dedos do pé","12B",0,6,2],["30701155","Outros transplantes cutâneos","12B",0,5,1],["30701163","Paraescapular","12B",0,6,2],["30701171","Retroauricular","12C",0,6,2],["30701180","Temporal","12C",0,6,2],["30701198","Transplante cutâneo com microanastomose","13A",0,6,3],["30702011","Grande dorsal (latissimus dorsi)","12C",0,6,2],["30702020","Grande glúteo (gluteus maximus)","12B",0,6,2],["30702038","Outros transplantes músculo-cutâneos","12B",0,6,2],["30702046","Reto abdominal (rectus abdominis)","12C",0,6,2],["30702054","Reto interno (gracilis)","12C",0,6,2],["30702062","Serrato maior (serratus)","12C",0,6,2],["30702070","Tensor da fascia lata (tensor fascia lata)","12C",0,6,2],["30701201","Transplante cutâneo sem microanastomose, ilha neurovascular","8B",0,4,2],["30701210","Transplante miocutâneo com microanastomose","13A",0,6,3],["30702089","Trapézio (trapezius)","12B",0,6,2],["30703018","Bíceps femoral (biceps femoris)","12B",0,6,2],["30703026","Extensor comum dos dedos (extensor digitorum longus)","10A",0,6,1],["30703034","Extensor próprio do dedo gordo (extensor hallucis longus)","9C",0,5,1],["30703042","Flexor curto plantar (flexor digitorum brevis)","12A",0,6,2],["30703050","Grande dorsal (latissimus dorsi)","12B",0,6,2],["30703069","Grande peitoral (pectoralis major)","12B",0,6,2],["30703077","Músculo pédio (extensor digitorum brevis)","12B",0,5,1],["30703085","Os músculos latissimus dorsi, gracilis, rectus femoris, tensor fascia lata, flexor digitorum brevis, quando transplantados com","3B",0,1,0],["30703093","Outros transplantes musculares","12B",0,5,1],["30703107","Primeiro radial externo (extensor carpi radialis longus)","12B",0,5,1],["30703115","Reto anterior (rectus femoris)","12C",0,6,2],["30703123","Reto interno (gracilis)","12C",0,6,2],["30703131","Sartório (sartorius)","12C",0,6,2],["30703140","Semimembranoso (semimembranosus)","12C",0,6,2],["30703158","Semitendinoso (semitendinosus)","12C",0,6,2],["30703166","Serrato maior (serratus)","12C",0,6,2],["30703174","Supinador longo (brachioradialis)","12B",0,5,1],["30703182","Tensor da fascia lata (tensor fascia lata)","12C",0,6,2],["30704014","Costela","12C",0,6,2],["30704022","Ilíaco","12C",0,6,2],["30704030","Osteocutâneo de ilíaco","12C",0,6,2],["30704049","Osteocutâneos de costela","13A",0,6,2],["30704057","Osteomusculocutâneo de costela","13A",0,6,2],["30704065","Outros transplantes ósseos e osteomusculocutâneos","13A",0,6,2],["30704073","Perônio ou fíbula","13A",0,6,2],["30704081","Transplante ósseo vascularizado (microanastomose)","13A",0,6,1],["30705010","Autotransplante de dois retalhos musculares combinados","13A",0,7,2],["30705029","Autotransplante de dois retalhos cutâneos combinados","13A",0,7,2],["30705037","Autotransplante de dois retalhos, um cutâneo combinado a um muscular","13A",0,7,2],["30705045","Autotransplante de dois retalhos, um cutâneo combinado a retalho osteomuscular","13A",0,7,2],["30705053","Autotransplante de epiplon","13A",0,7,2],["30705061","Autotransplante de outros retalhos","13A",0,7,2],["30705070","Autotransplante de três retalhos","13A",0,7,2],["30705100","Reimplante de segmentos distais do membro superior, com ressecção segmentar","13A",0,7,2],["30706017","Reimplante do membro inferior do nível médio proximal da perna até a coxa","13A",0,6,3],["30706025","Reimplante do membro inferior do pé até o terço médio da perna","13A",0,6,3],["30706033","Reimplante do membro superior, do nível médio do antebraço até o ombro","13A",0,6,3],["30707013","Transplante articular de metatarsofalangeana para a mão","13A",0,6,2],["30707021","Transplante de 2º pododáctilo para mão","13A",0,6,3],["30707030","Transplante de dedos do pé para a mão","13A",0,6,3],["30707064","Transplante de dois pododáctilos para a mão","13A",0,6,2],["30707048","Transplante do 2º pododáctilo para o polegar","13A",0,6,2],["30707056","Transplante do hallux para polegar","13A",0,6,3],["30709016","Instalação de halo craniano","3A",0,2,0],["30709024","Tração cutânea","2B",0,1,0],["30709032","Tração transesquelética (por membro)","4A",0,1,0],["30710014","Fios ou pinos metálicos transósseos","4A",0,1,0],["30710030","Placas","7A",0,2,1],["30710049","Próteses de substituição de pequenas articulações","8A",0,3,1],["30710022","Retirada de fios ou pinos metálicos intra-ósseos","3C",0,2,1],["30710073","Retirada de fixador externo circular","5A",0,5,1],["30710057","Retirada de fixador externo linear","4A",0,1,0],["30710081","Retirada de hastes metálicas intraósseas, bloqueadas ou não","7A",0,3,2],["30710090","Retirada de parafusos metálicos intraósseos","5A",0,3,1],["30711010","Imobilizações não-gessadas (qualquer segmento)","1A",0,0,0],["30711029","Membro inferior","1C",0,0,0],["30711037","Membro superior","1B",0,0,0],["30712017","Áxilo-palmar ou pendente","2A",0,0,0],["30712025","Bota com ou sem salto","2A",0,0,0],["30712033","Colar","2A",0,0,0],["30712041","Colete","2B",0,0,1],["30712050","Cruro-podálico","2C",0,0,0],["30712068","Dupla abdução ou Ducroquet","2C",0,0,0],["30712076","Halo-gesso","4C",0,0,1],["30712084","Inguino-maleolar","2B",0,0,0],["30712092","Luva","2A",0,0,0],["30712106","Minerva ou Risser para escoliose","4C",0,0,1],["30712114","Pelvipodálico","4C",0,0,1],["30712122","Spica-gessada","2B",0,0,1],["30712130","Tipo Velpeau","1C",0,0,0],["30712149","Tóraco-braquial","3A",0,0,1],["30713153","Artroscopia para diagnóstico com ou sem biópsia sinovial","5C",0,3,1],["30713021","Biópsia óssea","2B",0,2,0],["30713030","Biópsias percutânea sinovial ou de tecidos moles","2B",0,2,0],["30713048","Enxertos em outras pseudoartroses","7C",0,4,1],["30713064","Manipulação articular sob anestesia geral","8A",0,2,0],["30713137","Punção articular diagnóstica ou terapêutica","4C",0,3,0],["30713145","Punção extra-articular diagnóstica ou terapêutica","4C",0,3,0],["30713072","Retirada de enxerto ósseo","3B",0,1,1],["30714010","Corpo estranho intra-articular – tratamento cirúrgico","5A",0,2,1],["30714036","Corpo estranho intramuscular – tratamento cirúrgico","5A",0,2,1],["30714028","Corpo estranho intra-ósseo – tratamento cirúrgico","5A",0,2,1],["30715016","Artrodese da coluna com instrumentação por segmento","10B",0,6,2],["30715024","Artrodese de coluna via anterior ou póstero lateral","10B",0,6,2],["30715598","Artroplastia discal de coluna vertebral","11A",0,6,2],["30715032","Biópsia da coluna","5B",0,2,1],["30715040","Biópsia de corpo vertebral com agulha","3B",0,2,1],["30715059","Cirurgia de coluna por via endoscópica","11A",0,7,2],["30715067","Cordotomia – mielotomia","10B",0,6,2],["30715075","Costela cervical – tratamento cirúrgico","8B",0,3,1],["30715580","Discectomia percutânea endoscópica","9A",0,5,1],["30715571","Discectomia percutânea mecânica","9A",0,5,1],["30715083","Derivação lombar externa","6A",0,3,1],["30715091","Descompressão medular e/ou cauda equina","9C",0,5,2],["30715105","Dorso curvo / escoliose / giba costal – tratamento cirúrgico","11A",0,6,2],["30715113","Espondilolistese – tratamento cirúrgico","10A",0,5,2],["30715121","Fratura de coluna – tratamento conservador","2C",0,0,0],["30715130","Fratura do cóccix – redução incruenta","3A",0,2,0],["30715148","Fratura do cóccix – tratamento cirúrgico","7C",0,2,1],["30715156","Fratura e/ou luxação de coluna vertebral – redução incruenta","5B",0,2,1],["30715164","Fraturas ou fratura-luxação de coluna – tratamento cirúrgico","8C",0,5,2],["30715172","Hemivértebra – ressecção via anterior ou posterior","9A",0,4,2],["30715393","Hérnia de disco cervical – tratamento cirúrgico","10C",0,5,2],["30715180","Hérnia de disco tóraco-lombar – tratamento cirúrgico","9C",0,5,1],["30715199","Laminectomia ou laminotomia","9C",0,5,2],["30715601","Localização/intervenção estereotáxica por neuronavegação","10A",0,5,1],["30715563","Osteoplastia vertebral por cifoplastia","8C",0,5,1],["30715555","Osteoplastia vertebral por vertebroplastia","8C",0,5,1],["30715210","Osteomielite de coluna – tratamento cirúrgico","8B",0,4,2],["30715229","Osteotomia de coluna vertebral – tratamento cirúrgico","8C",0,5,2],["30715237","Outras afecções da coluna – tratamento incruento","3B",0,2,0],["30715245","Pseudoartrose de coluna – tratamento cirúrgico","9C",0,6,2],["30715253","Punção liquórica","3C",0,2,0],["30715261","Retirada de corpo estranho – tratamento cirúrgico","8B",0,4,2],["30715270","Retirada de material de síntese – tratamento cirúrgico","8A",0,3,1],["30715288","Substituição de corpo vertebral","10B",0,6,2],["30715296","Tração cervical transesquelética","8B",0,2,1],["30715300","Tratamento cirúrgico da cifose infantil","11B",0,7,2],["30715318","Tratamento cirúrgico da lesão traumática raquimedular","11B",0,6,2],["30715326","Tratamento cirúrgico das malformações craniovertebrais","10B",0,6,2],["30715334","Tratamento cirúrgico do disrafismo","10B",0,5,2],["30715342","Tratamento conservador do traumatismo raquimedular (por dia)","3C",0,0,0],["30715350","Tratamento microcirúrgico das lesões intramedulares","13B",0,7,2],["30715369","Tratamento microcirúrgico do canal vertebral estreito por segmento","9C",0,6,2],["30715377","Tratamento pré-natal dos disrafismos espinhais","9A",0,6,2],["30715385","Tumor ósseo vertebral – ressecção com substituição","10B",0,5,2],["30717191","Acromioplastia – procedimento aberto","8A",0,4,1],["30717205","Artrodese ao nível do ombro – escápulo-torácica","11B",0,5,2],["30717019","Artrodese ao nível do ombro – escápulo-umeral","10C",0,5,2],["30717027","Artroplastia parcial","11A",0,5,2],["30717213","Artroplastia parcial com interposição","11B",0,5,2],["30717183","Artroplastia reversa","11C",0,5,2],["30717221","Artroplastia total","11C",0,5,2],["30717035","Artrotomia glenoumeral – tratamento cirúrgico","8A",0,2,1],["30717043","Biópsia cirúrgica da cintura escapular","3C",0,1,1],["30717051","Deformidade (doença) Sprengel – tratamento cirúrgico","8A",0,5,2],["30717060","Desarticulação ao nível do ombro – tratamento cirúrgico","9A",0,4,2],["30717078","Escápula em ressalto – tratamento cirúrgico","7A",0,2,1],["30717086","Fratura de cintura escapular – tratamento conservador","3C",0,1,0],["30717094","Fraturas e/ou luxações e/ou avulsões – redução incruenta","4C",0,2,1],["30717108","Fraturas e/ou fratura luxação em 2 partes","10C",0,5,2],["30717132","Pseudoartroses e/ou osteotomia da clavícula ou escápula","10C",0,5,2],["30717302","Reparo aberto da ruptura manguito rotador (2 tendões)","9B",0,5,2],["30717310","Reparo aberto da ruptura manguito rotador (3 tendões)","9C",0,5,2],["30717329","Reparo aberto da ruptura manguito rotador (parcial ou transfixante/completa de 1 tendão)","9A",0,5,2],["30717337","Ressecção segmentar ao nível da cintura escapular","9C",0,4,2],["30717140","Ressecção parcial ou total de clavícula – tratamento cirúrgico","9A",0,4,1],["30717167","Transferências musculares ao nível da cintura escapular","11A",0,5,1],["30717116","Tratamento cirúrgico aberto de luxações crônicas habituais ou recidivantes","10B",0,5,2],["30718015","Amputação ao nível do braço – tratamento cirúrgico","8A",0,3,1],["30718023","Biópsia cirúrgica do úmero","5B",0,1,1],["30718031","Fixação externa na urgência, com fixador externo","9A",0,5,1],["30718040","Fratura (incluindo descolamento epifisário) – redução incruenta","3B",0,2,1],["30718058","Fratura (incluindo descolamento epifisário) – tratamento cirúrgico","8C",0,4,1],["30718066","Fratura de úmero – tratamento conservador","2B",0,0,0],["30718082","Osteomielite de úmero – tratamento cirúrgico","9A",0,3,1],["30718090","Pseudoartroses, osteotomias, alongamentos/encurtamentos – tratamento cirúrgico","9A",0,4,2],["30719011","Artrodese – tratamento cirúrgico","8B",0,4,1],["30719143","Artroplastia da cabeça do rádio","9C",0,5,1],["30719020","Artroplastia total com implante","11A",0,5,2],["30719038","Artroplastias sem implante – tratamento cirúrgico","6A",0,3,1],["30719046","Artrotomia de cotovelo – tratamento cirúrgico","5B",0,1,1],["30719054","Biópsia cirúrgica de cotovelo","3B",0,1,1],["30719062","Desarticulação ao nível do cotovelo – tratamento cirúrgico","8B",0,3,1],["30719070","Fratura de cotovelo – tratamento conservador","2A",0,0,0],["30719089","Fixação externa na urgência, com fixador externo","9A",0,5,1],["30719097","Fraturas e/ou luxações – redução incruenta","4A",0,2,0],["30719119","Lesões ligamentares – redução incruenta","3A",0,2,0],["30719100","Tratamento cirúrgico de fratura do úmero distal – 1 coluna","10A",0,5,2],["30719127","Tratamento cirúrgico das tendinites, sinovites e artrites","4C",0,2,1],["30720010","Abaixamento miotendinoso no antebraço","6A",0,3,1],["30720036","Amputação ao nível do antebraço – tratamento cirúrgico","8B",0,3,1],["30720044","Biópsia cirúrgica do antebraço","3B",0,1,1],["30720052","Contratura isquêmica de Volkmann – tratamento cirúrgico","8A",0,4,2],["30720087","Fratura do antebraço – tratamento conservador","2A",0,0,0],["30720095","Fratura e/ou luxações – tratamento cirúrgico","6C",0,3,1],["30720109","Fratura e/ou luxações – redução incruenta","4A",0,2,1],["30720125","Osteomielite dos ossos do antebraço – tratamento cirúrgico","9C",0,5,2],["30721016","Agenesia de rádio (centralização da ulna no carpo)","9A",0,4,2],["30721024","Alongamento do rádio/ulna – tratamento cirúrgico","8B",0,3,2],["30721032","Artrodese entre os ossos do carpo","4C",0,1,1],["30721059","Artrodese rádio-cárpica ou do punho","7C",0,3,1],["30721067","Artroplastia do punho (com implante) – tratamento cirúrgico","8C",0,5,1],["30721083","Artrotomia – tratamento cirúrgico","3C",0,1,1],["30721091","Biópsia cirúrgica de punho","3B",0,1,1],["30721113","Desarticulação do punho – tratamento cirúrgico","6C",0,3,1],["30721130","Fratura de punho – tratamento conservador","2A",0,0,0],["30721148","Fratura de osso do carpo – redução cirúrgica","4C",0,2,1],["30721180","Fraturas e/ou luxações do punho – redução incruenta","4A",0,2,1],["30721199","Fraturas e/ou luxações do punho – tratamento cirúrgico","6C",0,2,1],["30721210","Pseudoartroses – tratamento cirúrgico","7B",0,3,2],["30721229","Ressecção de osso do carpo – tratamento cirúrgico","5B",0,2,1],["30721245","Sinovectomia de punho – tratamento cirúrgico","5B",0,2,1],["30722012","Abscesso de mão e dedos – tratamento cirúrgico","5C",0,3,1],["30722039","Abscessos de dedo (drenagem) – tratamento cirúrgico","2B",0,1,0],["30722055","Alongamentos tendinosos de mão","7C",0,3,3],["30722063","Amputação ao nível dos metacarpianos – tratamento cirúrgico","5B",0,3,1],["30722071","Amputação de dedo (cada) – tratamento cirúrgico","5A",0,1,1],["30722110","Artrodese interfalangeana / metacarpofalangeana – tratamento cirúrgico","8B",0,3,1],["30722136","Artroplastia com implante na mão (MF ou IF)","9B",0,3,1],["30722179","Bridas congênitas – tratamento cirúrgico","7A",0,3,1],["30722225","Centralização da ulna (tratamento da mão torta radial)","10A",0,4,2],["30722241","Coto de amputação digital – revisão","5A",0,1,1],["30722276","Dedo em gatilho, capsulotomia / fasciotomia – tratamento cirúrgico","5A",0,2,1],["30722284","Dedo em martelo – tratamento cirúrgico","5A",0,3,1],["30722365","Fratura de Bennett – tratamento cirúrgico","4C",0,2,1],["30722411","Fraturas de falanges ou metacarpianos – tratamento cirúrgico com fixação","6A",0,3,1],["30722438","Fraturas e/ou luxações de falanges – tratamento cirúrgico","6A",0,3,1],["30722462","Lesões ligamentares agudas da mão – reparação cirúrgica","6A",0,3,1],["30722500","Luxação metacarpofalangeana – tratamento cirúrgico","5A",0,2,1],["30722519","Osteomielite ao nível da mão – tratamento cirúrgico","6C",0,2,1],["30722560","Policização ou transferência digital","9A",0,5,2],["30722578","Polidactilia articulada – tratamento cirúrgico","6A",0,3,1],["30722667","Reimplante de dois dedos da mão","13A",0,6,3],["30722675","Reimplante do membro superior nível transmetacarpiano","13A",0,6,3],["30722683","Reimplante do polegar","13A",0,6,3],["30722713","Ressecção de cisto sinovial","5A",0,2,1],["30722799","Sindactilia de 2 dígitos – tratamento cirúrgico","5B",0,3,2],["30722802","Sindactilia múltipla – tratamento cirúrgico","8B",0,4,2],["30722845","Transposição de dedo – tratamento cirúrgico","9A",0,4,2],["30722870","Tratamento da doença de Kiembuck com transplante vascularizado","10A",0,5,2],["30723019","Biópsia cirúrgica de cintura pélvica","3B",0,1,1],["30723051","Tratamento cirúrgico das fraturas e/ou luxações do anel pélvico","9C",0,5,2],["30723078","Osteomielite ao nível da pelve – tratamento cirúrgico","9C",0,3,2],["30723086","Osteotomias / artrodeses – tratamento cirúrgico","9A",0,4,2],["30724015","Artrite séptica – tratamento cirúrgico","9A",0,4,1],["30724058","Artroplastia (qualquer técnica ou versão de quadril)","11C",0,6,3],["30724082","Artroplastia parcial do quadril (tipo Thompson ou qualquer técnica)","8C",0,5,2],["30724104","Artrotomia coxo-femoral – tratamento cirúrgico","7B",0,2,1],["30724120","Desarticulação coxo-femoral – tratamento cirúrgico","9A",0,5,2],["30724147","Epifisiolistese proximal de fêmur (fixação in situ)","9A",0,3,1],["30724180","Fratura e/ou luxação e/ou avulsão coxo-femoral – tratamento cirúrgico","9C",0,5,2],["30724198","Luxação congênita de quadril (redução cirúrgica e osteotomia)","11C",0,5,2],["30724279","Revisão de artroplastias de quadril com retirada de componentes e implante de prótese","13A",0,7,3],["30724155","Tratamento cirúrgico da fratura do acetábulo (abordagem única)","10C",0,5,2],["30725011","Alongamento / transporte ósseo / pseudoartrose com fixador externo","8B",0,5,2],["30725020","Alongamento de fêmur – tratamento cirúrgico","10A",0,4,2],["30725038","Amputação ao nível da coxa – tratamento cirúrgico","10A",0,3,2],["30725046","Biópsia cirúrgica de fêmur","3C",0,1,1],["30725070","Descolamento epifisário – tratamento cirúrgico","9A",0,4,2],["30725127","Tratamento cirúrgico das fraturas do colo do fêmur com fixação interna","9C",0,5,2],["30725151","Pseudoartroses e/ou osteotomias – tratamento cirúrgico","9C",0,5,2],["30726018","Artrite séptica – tratamento cirúrgico","7A",0,3,1],["30726026","Artrodese de joelho – tratamento cirúrgico","8A",0,4,2],["30726034","Artroplastia total de joelho com implantes","10B",0,6,2],["30726042","Artrotomia – tratamento cirúrgico","7A",0,2,1],["30726247","Reconstruções ligamentares do pivot central – tratamento cirúrgico","9A",0,4,2],["30726255","Revisões de artroplastia total – tratamento cirúrgico","9C",0,6,2],["30727030","Alongamento dos ossos da perna – tratamento cirúrgico","8A",0,4,2],["30727049","Amputação de perna – tratamento cirúrgico","7C",0,3,1],["30727138","Fraturas de tíbia associada ou não a fíbula – tratamento cirúrgico","9A",0,4,2],["30727162","Osteotomias e/ou pseudoartroses – tratamento cirúrgico","9A",0,3,2],["30728045","Artrodese ao nível do tornozelo – tratamento cirúrgico","10C",0,3,1],["30728053","Artroplastia de tornozelo (com implante)","13C",0,5,2],["30728142","Lesões ligamentares agudas ao nível do tornozelo – tratamento cirúrgico","8B",0,3,1],["30728150","Lesões ligamentares crônicas ao nível do tornozelo – tratamento cirúrgico","9B",0,3,1],["30729017","Amputação ao nível do pé – tratamento cirúrgico","9B",0,3,1],["30729041","Artrodese de tarso e/ou médio pé – tratamento cirúrgico","10C",0,3,1],["30729050","Artrodese metatarso – falângica ou interfalângica","8A",0,2,1],["30729106","Deformidade dos dedos – tratamento cirúrgico","8A",0,2,1],["30729181","Hallux valgus (um pé) – tratamento cirúrgico","8C",0,3,1],["30729270","Rotura do tendão de Aquiles – tratamento cirúrgico","10C",0,2,1],["30729408","Tratamento cirúrgico das fraturas dos calcâneo","11C",0,5,2],["30730066","Drenagem cirúrgica do psoas","5B",0,2,1],["30730074","Fasciotomia","4C",0,2,1],["30730120","Terapia por ondas de choque extracorpórea em partes moles – acompanhamento 1ª aplicação","8A",60.0,0,0],["30730139","Terapia por ondas de choque extracorpórea em partes moles – acompanhamento reaplicações","4C",60.0,0,0],["30731062","Sinovectomia – tratamento cirúrgico","5B",0,2,1],["30731089","Tenodese","5B",0,1,1],["30731097","Tenólise no túnel osteofibroso","6A",0,3,1],["30731119","Tenoplastia / enxerto de tendão – tratamento cirúrgico","6A",0,3,1],["30731143","Tenorrafia no túnel osteofibroso – mais de 2 dígitos","6A",0,3,1],["30731151","Tenorrafia no túnel osteofibroso até 2 dígitos","4C",0,2,1],["30731160","Tenorrafia única em outras regiões","3C",0,2,1],["30731178","Tenossinovectomia de mão ou punho","4C",0,2,1],["30731186","Tenossinovites estenosantes – tratamento cirúrgico","2C",0,1,1],["30731208","Tenotomia","5B",0,1,1],["30731216","Transposição de mais de 1 tendão – tratamento cirúrgico","6A",0,4,1],["30732107","Curetagem ou ressecção em bloco + cimentação em tumor ósseo","10A",0,4,2],["30732026","Enxerto ósseo – retirada de enxerto autólogo","9B",0,3,2],["30732034","Ressecção da lesão com cimentação e osteossíntese","9A",0,5,2],["30732085","Tumor ósseo (ressecção com substituição)","9A",0,5,2],["30733057","Meniscectomia – um menisco","8C",33.8,4,1],["30733073","Reconstrução, retencionamento ou reforço do ligamento cruzado anterior ou posterior","10C",38.5,6,1],["30733065","Reparo ou sutura de um menisco","10C",38.5,6,1],["30733022","Sinovectomia parcial ou subtotal","8C",33.8,4,1],["30733014","Sinovectomia total","9C",33.8,5,1],["30734037","Condroplastia (com remoção de corpos livres)","8C",33.8,4,1],["30734053","Reconstrução, retencionamento ou reforço de ligamento","10C",38.5,6,1],["30734010","Sinovectomia total","9C",33.8,5,1],["30735033","Acromioplastia","9C",33.8,5,1],["30735050","Instabilidade glenoumeral, por via artroscópica","10C",38.5,6,2],["30735068","Reparo artroscópico da ruptura manguito rotador (transfixante/completa ou parcial de 1 tendão)","10C",38.5,6,2],["30735181","Reparo artroscópico da ruptura manguito rotador (2 tendões)","11A",0,6,2],["30735190","Reparo artroscópico da ruptura manguito rotador (3 tendões)","11B",0,6,2],["30735084","Ressecção lateral da clavícula","9C",33.8,5,1],["30735092","Tenotomia da porção longa do bíceps, via artroscópica","9C",33.8,5,1],["30736013","Sinovectomia total","9C",33.8,5,1],["30736021","Sinovectomia parcial ou subtotal","8C",33.8,4,1],["30737010","Sinovectomia total","9C",33.8,5,1],["30737079","Túnel do carpo – descompressão","9C",33.8,5,1],["30738016","Sinovectomia total","10C",38.5,6,1],["30738024","Sinovectomia parcial e/ou remoção de corpos livres","9C",33.8,5,1],["30738040","Tratamento do impacto fêmoro-acetabular","12B",42.9,7,1],["31401015","Biópsia estereotáxica de encéfalo","10A",0,5,2],["31401031","Cirurgia intracraniana por via endoscópica","11A",0,7,1],["31401040","Craniotomia para remoção de corpo estranho","11C",0,5,2],["31401058","Derivação ventricular externa","5C",0,5,1],["31401155","Microcirurgia para tumores intracranianos","14A",0,7,2],["31401163","Microcirurgia por via transesfenoidal","11A",0,7,2],["31401171","Microcirurgia vascular intracraniana","14A",0,7,2],["31401236","Sistema de derivação ventricular interna com válvulas ou revisões","10B",0,6,2],["31401252","Tratamento cirúrgico da epilepsia","11C",0,6,2],["31401260","Tratamento cirúrgico da fístula liquórica","10C",0,6,2],["31401279","Tratamento cirúrgico da meningoencefalocele","10B",0,6,2],["31401295","Tratamento cirúrgico do abscesso encefálico","11C",0,5,2],["31401309","Tratamento cirúrgico do hematoma intracraniano","11C",0,5,2],["31403018","Biópsia de nervo","3C",0,1,1],["31403034","Denervação percutânea de faceta articular – por segmento","9C",0,4,1],["31403042","Enxerto de nervo","8B",0,4,2],["31403085","Enxerto interfascicular","9A",0,5,1],["31403107","Excisão de tumores de nervos periféricos com enxerto interfascicular","9B",0,5,1],["31403115","Excisão de tumores dos nervos periféricos","7C",0,4,1],["31403123","Exploração cirúrgica de nervo (neurólise externa)","5B",0,3,1],["31403131","Extirpação de neuroma","4A",0,2,1],["31403158","Lesão de nervos associada à lesão óssea","8C",0,3,1],["31403174","Microcirurgia do plexo braquial com exploração, neurólise e enxertos","13A",0,7,2],["31403182","Microcirurgia do plexo braquial com exploração e neurólise","12C",0,5,2],["31403271","Microneurorrafia única","8A",0,4,1],["31403280","Neurólise das síndromes compressivas","6C",0,3,1],["31403310","Ressecção de neuroma","4A",0,3,2],["31403344","Simpatectomia","9B",0,5,1],["31403352","Transposição de nervo","10A",0,2,1],["31403360","Tratamento microcirúrgico das neuropatias compressivas","8B",0,5,2],["31404014","Descompressão vascular de nervos cranianos","11A",0,6,2],["31404022","Neurotomia seletiva do trigêmio","10A",0,6,2],["31405010","Bloqueio do sistema nervoso autônomo","6A",0,2,1],["31405037","Tratamento da síndrome do desfiladeiro cérvico-torácico","9B",0,5,2]];

var DB = DBR.map(function(r) {
  return { id: r[0], codigo: r[0], descricao: r[1], porte: r[2], uco: r[3], porteAnest: r[4], nAux: r[5] };
});

var CONVS = [
  { id: 1, nome: "100% (Particular / sem deflator)", d: 1.00 },
  { id: 2, nome: "90%", d: 0.90 },
  { id: 3, nome: "80%", d: 0.80 },
  { id: 4, nome: "75%", d: 0.75 },
  { id: 5, nome: "70%", d: 0.70 },
  { id: 6, nome: "65%", d: 0.65 },
  { id: 7, nome: "60%", d: 0.60 },
  { id: 8, nome: "50%", d: 0.50 }
];

var C = {
  bg: "#090d18", surface: "#0f1525", hi: "#151d30", border: "#1c2840",
  gold: "#d4a843", teal: "#3fc8b0", rose: "#e06080", green: "#5ec87a",
  blue: "#5b8dee", text: "#dde3f0", muted: "#6070a0", dim: "#2a3a5a"
};

function Card({ children, style }) {
  return React.createElement("div", {
    style: { background: C.surface, border: `1px solid ${C.border}`, borderRadius: 13, padding: 15, ...style }
  }, children);
}
function Sec({ children }) {
  return React.createElement("div", {
    style: { fontSize: 10, color: C.gold, fontWeight: 800, letterSpacing: "0.12em", marginBottom: 12 }
  }, children);
}
function Tag({ children, color = C.muted }) {
  return React.createElement("span", {
    style: { background: color + "10", color, border: `1px solid ${color}20`, borderRadius: 5, padding: "2px 8px", fontSize: 10, fontWeight: 600, display: "inline-block", opacity: 0.85 }
  }, children);
}
function Divr({ style }) {
  return React.createElement("div", { style: { height: 1, background: C.border, ...style } });
}
function Inp({ value, onChange, placeholder, type = "text", onBlur, onFocus, style }) {
  return React.createElement("input", {
    type, value,
    onChange: e => onChange(e.target.value),
    placeholder, onBlur, onFocus,
    style: { background: C.bg, border: `1px solid ${C.border}`, color: C.text, borderRadius: 8, padding: "9px 10px", fontSize: 13, width: "100%", outline: "none", boxSizing: "border-box", ...style }
  });
}
function Sel({ value, onChange, options, placeholder, style }) {
  return React.createElement("select", {
    value,
    onChange: e => onChange(e.target.value),
    style: { background: C.bg, border: `1px solid ${C.border}`, color: value ? C.text : C.muted, borderRadius: 8, padding: "9px 10px", fontSize: 13, width: "100%", outline: "none", ...style }
  },
    placeholder && React.createElement("option", { value: "" }, placeholder),
    options.map(o => React.createElement("option", { key: o.value ?? o, value: o.value ?? o }, o.label ?? o))
  );
}
function Btn({ children, onClick, variant = "primary", disabled, style }) {
  const t = {
    primary: { background: C.gold, color: "#080c18" },
    ghost: { background: "transparent", color: C.muted, border: `1px solid ${C.border}` },
    danger: { background: "#e0606018", color: "#e06060", border: "1px solid #e0606030" },
    teal: { background: C.teal + "18", color: C.teal, border: `1px solid ${C.teal}35` },
    green: { background: C.green + "18", color: C.green, border: `1px solid ${C.green}35` }
  };
  return React.createElement("button", {
    onClick, disabled,
    style: { borderRadius: 8, padding: "9px 16px", fontSize: 13, fontWeight: 700, cursor: disabled ? "not-allowed" : "pointer", border: "none", opacity: disabled ? .4 : 1, ...t[variant], ...style }
  }, children);
}
function Tog({ label, checked, onChange, color = C.gold }) {
  return React.createElement("div", {
    onClick: () => onChange(!checked),
    style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 13px", background: checked ? color + "12" : C.bg, border: `1px solid ${checked ? color + "50" : C.border}`, borderRadius: 9, cursor: "pointer" }
  },
    React.createElement("div", {
      style: { width: 18, height: 18, borderRadius: 5, flexShrink: 0, background: checked ? color : C.dim, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#080c18", fontWeight: 900 }
    }, checked ? "✓" : ""),
    React.createElement("span", { style: { fontSize: 12.5, color: checked ? color : C.muted } }, label)
  );
}

// Autocomplete
function Auto({ value, onChange, placeholder }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const sel = value ? DB.find(c => c.id === value) : null;
  const sugs = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (t.length < 2) return [];
    return DB.filter(c => c.codigo.startsWith(t) || c.descricao.toLowerCase().includes(t)).slice(0, 10);
  }, [q]);
  const pick = c => { onChange(c.id); setQ(""); setOpen(false); };
  if (sel) return React.createElement("div", {
    style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", background: C.hi, border: `1px solid ${C.gold}40`, borderRadius: 8 }
  },
    React.createElement("div", { style: { flex: 1, minWidth: 0 } },
      React.createElement("div", { style: { display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", marginBottom: 3 } },
        React.createElement("span", { style: { fontSize: 10.5, color: C.muted, fontFamily: "monospace", fontWeight: 600 } }, sel.codigo),
        React.createElement(Tag, null, sel.porte),
        sel.porteAnest !== null && React.createElement(Tag, { color: C.teal }, "PA ", sel.porteAnest),
        sel.nAux > 0 && React.createElement(Tag, { color: C.blue }, "Aux ", sel.nAux)
      ),
      React.createElement("div", { style: { fontSize: 13, color: "#ffffff", fontWeight: 600, marginTop: 4, lineHeight: 1.4 } }, sel.descricao),
      React.createElement("div", { style: { fontSize: 11, color: C.muted, marginTop: 2 } }, "Cirurgião: ", React.createElement("span", { style: { color: C.gold } }, brl(pv(sel.porte, sel.uco))))
    ),
    React.createElement("button", {
      onClick: () => { onChange(null); setQ(""); },
      style: { background: "none", border: "none", color: C.muted, cursor: "pointer", fontSize: 16, padding: "0 4px" }
    }, "✕")
  );
  return React.createElement("div", { style: { position: "relative" } },
    React.createElement(Inp, {
      value: q,
      onChange: v => { setQ(v); setOpen(true); },
      placeholder: placeholder || "Digite código ou nome…",
      onBlur: () => setTimeout(() => setOpen(false), 150),
      onFocus: () => setOpen(true),
      style: { border: `1px solid ${C.gold}50`, background: C.hi, fontSize: 14, padding: "12px 12px", color: C.text }
    }),
    open && sugs.length > 0 && React.createElement("div", {
      style: { position: "absolute", top: "100%", left: 0, right: 0, zIndex: 50, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, marginTop: 4, maxHeight: 260, overflowY: "auto", boxShadow: "0 8px 24px #00000066" }
    },
      sugs.map(c => React.createElement("div", {
        key: c.id, onMouseDown: () => pick(c),
        style: { padding: "10px 13px", cursor: "pointer", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 8 }
      },
        React.createElement("div", { style: { flex: 1, minWidth: 0 } },
          React.createElement("div", { style: { display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", marginBottom: 2 } },
            React.createElement("span", { style: { fontSize: 10.5, color: C.muted, fontFamily: "monospace", fontWeight: 600 } }, c.codigo),
            React.createElement(Tag, null, c.porte),
            c.porteAnest !== null && React.createElement(Tag, { color: C.teal }, "PA ", c.porteAnest),
            c.nAux > 0 && React.createElement(Tag, { color: C.blue }, "Aux ", c.nAux)
          ),
          React.createElement("div", { style: { fontSize: 12.5, color: "#ffffff", fontWeight: 600, marginTop: 3, lineHeight: 1.35 } }, c.descricao)
        ),
        React.createElement("span", { style: { fontSize: 11, color: C.muted, flexShrink: 0 } }, brl(pv(c.porte, c.uco)))
      ))
    ),
    open && q.length >= 2 && sugs.length === 0 && React.createElement("div", {
      style: { position: "absolute", top: "100%", left: 0, right: 0, zIndex: 50, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, marginTop: 4, padding: 14, textAlign: "center", color: C.muted, fontSize: 13 }
    }, `Nenhum resultado para "${q}"`)
  );
}

// ——— Campo de valor editável por profissional ———
function ValorField({ label, tabela, value, onChange, color }) {
  const [editing, setEditing] = useState(false);
  const [raw, setRaw] = useState("");

  const num = parseFloat(value) || tabela;
  const desc = tabela > 0 ? ((tabela - num) / tabela) * 100 : 0;
  const temDesconto = num < tabela - 0.01;

  const handleFocus = () => {
    setEditing(true);
    setRaw(num === tabela ? "" : num.toFixed(2).replace(".", ","));
  };

  const handleChange = v => setRaw(v);

  const handleBlur = () => {
    setEditing(false);
    const parsed = parseFloat(raw.replace(",", "."));
    if (!raw || isNaN(parsed) || parsed <= 0) {
      onChange(tabela);
    } else {
      onChange(parsed);
    }
    setRaw("");
  };

  return React.createElement("div", {
    style: { background: C.hi, border: `1px solid ${temDesconto ? color + "60" : C.border}`, borderRadius: 10, padding: "11px 13px" }
  },
    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 } },
      React.createElement("span", { style: { fontSize: 12, color: C.muted, fontWeight: 600 } }, label),
      temDesconto && React.createElement("span", {
        style: { fontSize: 11, fontWeight: 700, color: C.rose, background: C.rose + "15", border: `1px solid ${C.rose}30`, borderRadius: 5, padding: "2px 7px" }
      }, `-${desc.toFixed(1)}%`)
    ),
    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
      React.createElement("div", { style: { flex: 1, position: "relative" } },
        React.createElement("input", {
          type: "text",
          inputMode: "decimal",
          value: editing ? raw : (num === tabela ? "" : num.toFixed(2).replace(".", ",")),
          placeholder: `Tabela: ${brl(tabela)}`,
          onFocus: handleFocus,
          onChange: e => handleChange(e.target.value),
          onBlur: handleBlur,
          style: {
            background: temDesconto ? color + "08" : C.bg,
            border: `1px solid ${temDesconto ? color + "50" : C.border}`,
            color: temDesconto ? color : C.text,
            borderRadius: 8, padding: "9px 10px", fontSize: 13,
            width: "100%", outline: "none", boxSizing: "border-box",
            fontWeight: temDesconto ? 700 : 400
          }
        }),
        !editing && num !== tabela && React.createElement("div", {
          style: { position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", fontSize: 10, color: C.muted, pointerEvents: "none" }
        }, "editado")
      ),
      React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: C.gold, whiteSpace: "nowrap", minWidth: 90, textAlign: "right" } },
        brl(num)
      )
    ),
    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 5 } },
      React.createElement("span", { style: { fontSize: 10.5, color: C.dim } }, `Tabela CHM: ${brl(tabela)}`),
      temDesconto && React.createElement("span", { style: { fontSize: 10.5, color: C.rose } }, `Desconto: ${brl(tabela - num)}`)
    )
  );
}

// ——— Orçamento ———
function Orcamento({ res, onClose }) {
  const [np, setNp] = useState("");
  const [pp, setPP] = useState("");
  const [showDesc, setShowDesc] = useState(true);

  // Estado de valores editáveis por profissional
  // Inicializa com os valores calculados
  const initVals = () => {
    const v = { cirurgiao: res.tc };
    res.auxs.forEach((a, i) => { v[`aux_${i}`] = a.valor; });
    if (res.iv > 0) v.instrumentador = res.iv;
    if (res.av > 0) v.anestesia = res.av;
    return v;
  };
  const [vals, setVals] = useState(initVals);

  const setVal = (key, num) => setVals(v => ({ ...v, [key]: num }));

  // Total cobrado = soma dos valores editados
  const totalCobrado = Object.values(vals).reduce((s, x) => s + x, 0);
  const descontoTotal = res.total - totalCobrado;
  const descPct = res.total > 0 ? (descontoTotal / res.total) * 100 : 0;

  const copiar = () => {
    const data = new Date().toLocaleDateString("pt-BR");
    const L = [];
    L.push("================================");
    L.push("  HONORÁRIOS MÉDICOS - CHM 2018");
    L.push("================================");
    if (np) L.push("Paciente: " + np);
    if (pp) L.push("Procedimento: " + pp);
    L.push("Data: " + data);
    if (res.conv && res.conv !== "Particular (100%)") L.push("Convênio: " + res.conv);
    L.push("\nPROCEDIMENTOS:");
    res.linhas.forEach(l => {
      const via = l.via ? ` (${l.via === "mesma" ? "mesma via" : "via dif."})` : "";
      if (showDesc) {
        L.push(`  ${l.codigo} - ${l.descricao}`);
        L.push(`    Porte ${l.porte}${via} : ${brl(l.valor)}`);
      } else {
        L.push(`  ${l.codigo} - Porte ${l.porte}${via} : ${brl(l.valor)}`);
      }
    });
    L.push("\nEQUIPE (valores cobrados):");
    L.push(`  Cirurgião:      ${brl(vals.cirurgiao)}`);
    res.auxs.forEach((a, i) => L.push(`  ${a.label}:  ${brl(vals[`aux_${i}`] || a.valor)}`));
    if (res.iv > 0) L.push(`  Instrumentador: ${brl(vals.instrumentador || res.iv)}`);
    if (res.av > 0) L.push(`  Anestesia:      ${brl(vals.anestesia || res.av)}`);
    L.push("");
    L.push(`Valor de referência tabela: ${brl(res.total)}`);
    L.push(`Valor total cobrado:        ${brl(totalCobrado)}`);
    if (descontoTotal > 0.01) L.push(`Desconto concedido:         ${brl(descontoTotal)} (${descPct.toFixed(1)}%)`);
    L.push("================================");
    L.push("Valores estimados com base na CHM 2018. O reembolso final pode variar conforme as regras de cada convênio.");
    navigator.clipboard?.writeText(L.join("\n"));
    alert("Copiado!");
  };

  return React.createElement("div", {
    style: { position: "fixed", inset: 0, background: "#000000cc", zIndex: 100, overflowY: "auto" }
  },
    React.createElement("div", {
      style: { background: C.bg, padding: "16px 14px 40px", maxWidth: 580, margin: "0 auto", boxSizing: "border-box" }
    },
      // Header
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 20 } },
        React.createElement("button", {
          onClick: onClose,
          style: { background: "none", border: "none", color: C.muted, fontSize: 20, cursor: "pointer" }
        }, "←"),
        React.createElement("div", null,
          React.createElement("div", { style: { fontSize: 10, color: C.gold, fontWeight: 800, letterSpacing: "0.12em" } }, "ORÇAMENTO"),
          React.createElement("div", { style: { fontSize: 17, fontWeight: 900, color: C.text } }, "Descritivo de Honorários")
        )
      ),

      // Personalizar
      React.createElement(Card, { style: { marginBottom: 14 } },
        React.createElement(Sec, null, "PERSONALIZAR"),
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
          React.createElement(Inp, { value: np, onChange: setNp, placeholder: "Nome do paciente (opcional)" }),
          React.createElement(Inp, { value: pp, onChange: setPP, placeholder: "Procedimento proposto (opcional)" })
        )
      ),

      // Checkbox mostrar descritivo
      React.createElement("div", {
        style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 14, padding: "10px 12px", background: C.hi, borderRadius: 8, cursor: "pointer" },
        onClick: () => setShowDesc(v => !v)
      },
        React.createElement("div", {
          style: { width: 20, height: 20, borderRadius: 5, border: `2px solid ${showDesc ? C.teal : C.muted}`, background: showDesc ? C.teal : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#fff", fontWeight: 900, flexShrink: 0 }
        }, showDesc ? "✓" : ""),
        React.createElement("div", { style: { fontSize: 12.5, color: C.text } }, "Incluir descritivo dos procedimentos no texto copiado")
      ),

      // Card principal
      React.createElement(Card, { style: { border: `1px solid ${C.gold}30` } },
        // Cabeçalho do doc
        React.createElement("div", {
          style: { textAlign: "center", borderBottom: `1px solid ${C.border}`, paddingBottom: 14, marginBottom: 14 }
        },
          React.createElement("div", { style: { fontSize: 11, color: C.gold, fontWeight: 800, letterSpacing: "0.15em", marginBottom: 4 } }, "HONORÁRIOS MÉDICOS"),
          React.createElement("div", { style: { fontSize: 16, fontWeight: 900, color: C.text } }, "Descritivo CHM 2018"),
          React.createElement("div", { style: { fontSize: 11, color: C.muted, marginTop: 4 } },
            new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })
          ),
          np && React.createElement("div", { style: { fontSize: 12, color: C.text, marginTop: 6 } }, "Paciente: ", React.createElement("strong", null, np)),
          pp && React.createElement("div", { style: { fontSize: 12, color: C.text, marginTop: 4 } }, "Procedimento: ", React.createElement("strong", null, pp)),
          res.conv && React.createElement("div", { style: { fontSize: 11, color: C.muted, marginTop: 2 } }, res.conv)
        ),

        // Procedimentos
        React.createElement("div", { style: { fontSize: 10, color: C.gold, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 10 } }, "PROCEDIMENTOS"),
        res.linhas.map((l, i) =>
          React.createElement("div", {
            key: i,
            style: { marginBottom: 10, padding: "10px 12px", background: C.hi, borderRadius: 9, border: `1px solid ${C.border}` }
          },
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 } },
              React.createElement("div", { style: { flex: 1 } },
                React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 4 } },
                  React.createElement("span", { style: { fontSize: 11, color: C.gold, fontFamily: "monospace", fontWeight: 700 } }, l.codigo),
                  React.createElement(Tag, null, l.porte),
                  l.via && React.createElement(Tag, { color: C.muted }, l.via === "mesma" ? "Mesma via" : "Via dif.")
                ),
                React.createElement("div", { style: { fontSize: 12, color: C.text } }, l.descricao)
              ),
              React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: C.gold, whiteSpace: "nowrap" } }, brl(l.valor))
            )
          )
        ),

        React.createElement(Divr, { style: { margin: "14px 0" } }),

        // ——— VALORES POR PROFISSIONAL ———
        React.createElement("div", { style: { fontSize: 10, color: C.gold, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 10 } }, "VALORES POR PROFISSIONAL"),
        React.createElement("div", { style: { fontSize: 11, color: C.muted, marginBottom: 12, lineHeight: 1.5 } },
          "Valores pré-preenchidos conforme tabela CHM. Edite para ajustar o valor cobrado de cada profissional."
        ),
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
          React.createElement(ValorField, {
            label: "Cirurgião",
            tabela: res.tc,
            value: vals.cirurgiao,
            onChange: v => setVal("cirurgiao", v),
            color: C.gold
          }),
          res.auxs.map((a, i) =>
            React.createElement(ValorField, {
              key: i,
              label: a.label,
              tabela: a.valor,
              value: vals[`aux_${i}`] ?? a.valor,
              onChange: v => setVal(`aux_${i}`, v),
              color: C.teal
            })
          ),
          res.iv > 0 && React.createElement(ValorField, {
            label: "Instrumentador",
            tabela: res.iv,
            value: vals.instrumentador ?? res.iv,
            onChange: v => setVal("instrumentador", v),
            color: C.green
          }),
          res.av > 0 && React.createElement(ValorField, {
            label: "Anestesia",
            tabela: res.av,
            value: vals.anestesia ?? res.av,
            onChange: v => setVal("anestesia", v),
            color: C.rose
          })
        ),

        React.createElement(Divr, { style: { margin: "18px 0" } }),

        // Resumo totais
        React.createElement("div", { style: { fontSize: 10, color: C.gold, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 12 } }, "RESUMO"),
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 } },
            React.createElement("span", { style: { color: C.muted } }, "Tabela CHM (referência)"),
            React.createElement("span", { style: { color: C.muted, textDecoration: descontoTotal > 0.01 ? "line-through" : "none" } }, brl(res.total))
          ),
          descontoTotal > 0.01 && React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 } },
            React.createElement("span", { style: { color: C.rose } }, `Desconto total (${descPct.toFixed(1)}%)`),
            React.createElement("span", { style: { color: C.rose } }, `− ${brl(descontoTotal)}`)
          )
        ),
        React.createElement("div", {
          style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: C.gold + "10", borderRadius: 9, border: `1px solid ${C.gold}35`, marginTop: 12 }
        },
          React.createElement("span", { style: { fontSize: 14, fontWeight: 800, color: C.text } }, "TOTAL COBRADO"),
          React.createElement("div", { style: { textAlign: "right" } },
            React.createElement("div", { style: { fontSize: 24, fontWeight: 900, color: C.gold } }, brl(totalCobrado)),
            descontoTotal > 0.01 && React.createElement("div", { style: { fontSize: 10, color: C.rose, marginTop: 2 } },
              `${descPct.toFixed(1)}% abaixo da tabela`
            )
          )
        ),
        React.createElement("div", {
          style: { marginTop: 14, fontSize: 10, color: C.dim, textAlign: "center", lineHeight: 1.6 }
        }, "Valores estimados com base na CHM 2018. O reembolso final pode variar conforme as regras de cada convênio, seguradora, contrato ou instituição.")
      ),

      React.createElement(Btn, {
        variant: "green", onClick: copiar,
        style: { marginTop: 14, width: "100%", padding: 14, fontSize: 14 }
      }, "Copiar para WhatsApp / E-mail"),
      React.createElement(Btn, {
        variant: "ghost", onClick: onClose,
        style: { marginTop: 8, width: "100%" }
      }, "← Voltar")
    )
  );
}

// ——— Calculadora ———
const VIA = [{ value: "mesma", label: "Mesma via (50%)" }, { value: "diferente", label: "Via dif. (70%)" }];
const nP = () => ({ id: Date.now() + Math.random(), cid: null, via: "mesma" });

function PRow({ proc, idx, onChange, onRemove }) {
  const isPrinc = idx === 0;
  return React.createElement("div", {
    style: { background: isPrinc ? C.gold + "08" : C.bg, border: `1px solid ${isPrinc ? C.gold + "35" : C.border}`, borderRadius: 10, padding: 12 }
  },
    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 } },
      React.createElement(Tag, { color: isPrinc ? C.gold : C.muted }, isPrinc ? "PRINCIPAL" : `SEC. ${idx}`),
      !isPrinc && React.createElement(Sel, {
        value: proc.via,
        onChange: v => onChange({ ...proc, via: v }),
        options: VIA,
        style: { flex: 1, fontSize: 12, padding: "6px 8px" }
      }),
      !isPrinc && React.createElement("button", {
        onClick: onRemove,
        style: { background: "none", border: "none", color: C.rose, cursor: "pointer", fontSize: 16, padding: "0 2px" }
      }, "✕")
    ),
    React.createElement(Auto, {
      value: proc.cid,
      onChange: id => onChange({ ...proc, cid: id }),
      placeholder: isPrinc ? "Digite código ou nome do procedimento principal…" : "Digite código ou nome do procedimento secundário…"
    })
  );
}

function Calc({ convs }) {
  const [procs, setProcs] = useState([{ id: 1, cid: null, via: "mesma" }]);
  const [cvid, setCvid] = useState("");
  const [cfg, setCfg] = useState({ urg: false, apt: false, vid: false, a1: true, a2: false, a3: false, a4: false, ins: false, ane: true });
  const [res, setRes] = useState(null);
  const [orcOpen, setOrcOpen] = useState(false);
  const sc = (k, v) => setCfg(c => ({ ...c, [k]: v }));
  const addP = () => { if (procs.length < 7) setProcs(p => [...p, nP()]); };

  const calc = useCallback(() => {
    const princ = procs[0]?.cid ? DB.find(c => c.id === procs[0].cid) : null;
    if (!princ) return;
    const conv = convs.find(c => c.id === parseInt(cvid));
    const df = conv ? conv.d : 1.0;
    const fU = cfg.urg ? 1.3 : 1, fA = cfg.apt ? 2.0 : 1, fV = cfg.vid ? 1.5 : 1;
    const baseP = pv(princ.porte, princ.uco) * fV * fU * fA * df;
    const procedimentos = [{ codigo: princ.codigo, descricao: princ.descricao, porte: princ.porte, via: null, valor: baseP, nAux: princ.nAux }];
    procs.slice(1).forEach(p => {
      const c = p.cid ? DB.find(x => x.id === p.cid) : null;
      if (!c) return;
      const viaMult = p.via === "mesma" ? 0.5 : 0.7;
      procedimentos.push({ codigo: c.codigo, descricao: c.descricao, porte: c.porte, via: p.via, valor: pv(c.porte, c.uco) * viaMult * fV * fU * fA * df, nAux: c.nAux });
    });
    const tc = procedimentos.reduce((s, x) => s + x.valor, 0);
    const auxCfg = [{ k: "a1", l: "1º Auxiliar", p: GP[1], minAux: 1 }, { k: "a2", l: "2º Auxiliar", p: GP[2], minAux: 2 }, { k: "a3", l: "3º Auxiliar", p: GP[3], minAux: 3 }, { k: "a4", l: "4º Auxiliar", p: GP[4], minAux: 4 }];
    const auxs = auxCfg.filter(a => cfg[a.k]).map(a => {
      const soma = procedimentos.reduce((s, proc) => s + (proc.nAux >= a.minAux ? proc.valor * a.p : 0), 0);
      return { label: `${a.l} (${(a.p * 100).toFixed(0)}%)`, valor: soma };
    });
    const iv = cfg.ins ? tc * 0.20 : 0;
    let av = 0;
    if (cfg.ane && princ.porteAnest !== null) {
      av = (AV[princ.porteAnest] || 0) * fA * fU * df;
      procs.slice(1).forEach(p => {
        const c = p.cid ? DB.find(x => x.id === p.cid) : null;
        if (c && c.porteAnest !== null) {
          const viaMult = p.via === "mesma" ? 0.5 : 0.7;
          av += (AV[c.porteAnest] || 0) * viaMult * fA * fU * df;
        }
      });
    }
    const total = tc + auxs.reduce((s, x) => s + x.valor, 0) + iv + av;
    setRes({ linhas: procedimentos, tc, auxs, iv, av, total, conv: conv ? `${conv.nome} - ${(conv.d * 100).toFixed(0)}%` : "Particular (100%)", df, flags: { urg: cfg.urg, apt: cfg.apt, vid: cfg.vid } });
  }, [procs, cfg, convs, cvid]);

  return React.createElement(React.Fragment, null,
    orcOpen && res && React.createElement(Orcamento, { res, onClose: () => setOrcOpen(false) }),
    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
      React.createElement(Card, null,
        React.createElement(Sec, null, "CONVÊNIO"),
        React.createElement(Sel, {
          value: cvid, onChange: setCvid,
          options: convs.map(c => ({ value: c.id, label: `${c.nome} - ${(c.d * 100).toFixed(0)}%` })),
          placeholder: "Sem deflator (100%)"
        })
      ),
      React.createElement(Card, null,
        React.createElement(Sec, null, `PROCEDIMENTOS (${procs.length}/7)`),
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
          procs.map((p, i) => React.createElement(PRow, {
            key: p.id, proc: p, idx: i,
            onChange: d => setProcs(ps => ps.map(x => x.id === p.id ? d : x)),
            onRemove: () => setProcs(ps => ps.filter(x => x.id !== p.id))
          }))
        ),
        procs.length < 7 && React.createElement(Btn, {
          variant: "teal", onClick: addP,
          style: { marginTop: 12, width: "100%", fontSize: 12 }
        }, `+ Procedimento secundário (${7 - procs.length} restantes)`)
      ),
      React.createElement(Card, null,
        React.createElement(Sec, null, "MODIFICADORES"),
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } },
          React.createElement(Tog, { label: "Urgência (+30%)", checked: cfg.urg, onChange: v => sc("urg", v) }),
          React.createElement(Tog, { label: "Apartamento (+100%)", checked: cfg.apt, onChange: v => sc("apt", v) }),
          React.createElement(Tog, { label: "Videolaparoscopia (+50%)", checked: cfg.vid, onChange: v => sc("vid", v), color: C.blue })
        )
      ),
      React.createElement(Card, null,
        React.createElement(Sec, null, "EQUIPE"),
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } },
          React.createElement(Tog, { label: "1º Auxiliar (60%)", checked: cfg.a1, onChange: v => sc("a1", v), color: C.teal }),
          React.createElement(Tog, { label: "2º Auxiliar (40%)", checked: cfg.a2, onChange: v => sc("a2", v), color: C.teal }),
          React.createElement(Tog, { label: "3º Auxiliar (30%)", checked: cfg.a3, onChange: v => sc("a3", v), color: C.teal }),
          React.createElement(Tog, { label: "4º Auxiliar (30%)", checked: cfg.a4, onChange: v => sc("a4", v), color: C.teal }),
          React.createElement(Tog, { label: "Instrumentador (~20%)", checked: cfg.ins, onChange: v => sc("ins", v), color: C.green }),
          React.createElement(Tog, { label: "Anestesia (auto)", checked: cfg.ane, onChange: v => sc("ane", v), color: C.rose })
        )
      ),
      React.createElement(Btn, {
        onClick: calc, disabled: !procs[0]?.cid,
        style: { padding: 14, fontSize: 14, width: "100%" }
      }, "Calcular Honorários"),
      res && React.createElement(Card, { style: { border: `1px solid ${C.gold}40`, background: C.gold + "05" } },
        React.createElement(Sec, null, "RESULTADO"),
        React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, padding: "8px 12px", background: C.hi, borderRadius: 8 } },
          React.createElement("span", { style: { fontSize: 12, color: C.muted } }, res.conv),
          React.createElement(Tag, { color: res.df < 1 ? C.rose : C.green }, `${(res.df * 100).toFixed(0)}%`)
        ),
        (res.flags.urg || res.flags.apt || res.flags.vid) && React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 } },
          res.flags.urg && React.createElement(Tag, null, "+30% urgência"),
          res.flags.apt && React.createElement(Tag, null, "+100% apartamento"),
          res.flags.vid && React.createElement(Tag, { color: C.blue }, "+50% video")
        ),
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 } },
          React.createElement("span", { style: { color: C.muted } }, "Cirurgião"),
          React.createElement("span", { style: { color: C.gold } }, brl(res.tc))
        ),
        res.auxs.map((a, i) => React.createElement("div", { key: i, style: { display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 } },
          React.createElement("span", { style: { color: C.muted } }, a.label),
          React.createElement("span", { style: { color: C.teal } }, brl(a.valor))
        )),
        res.iv > 0 && React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 } },
          React.createElement("span", { style: { color: C.muted } }, "Instrumentador"),
          React.createElement("span", { style: { color: C.green } }, brl(res.iv))
        ),
        res.av > 0 && React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 } },
          React.createElement("span", { style: { color: C.muted } }, "Anestesia"),
          React.createElement("span", { style: { color: C.rose } }, brl(res.av))
        ),
        React.createElement(Divr, { style: { margin: "10px 0" } }),
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 4, marginBottom: 14 } },
          React.createElement("span", { style: { fontSize: 14, fontWeight: 800, color: C.text } }, "TOTAL"),
          React.createElement("span", { style: { fontSize: 24, fontWeight: 900, color: C.gold } }, brl(res.total))
        ),
        React.createElement(Btn, {
          variant: "green", onClick: () => setOrcOpen(true),
          style: { width: "100%", padding: 12, fontSize: 13 }
        }, "Gerar Orçamento para o Paciente")
      )
    )
  );
}

// ——— Convênios ———
function Convs({ convs, setConvs }) {
  const [form, setForm] = useState({ nome: "", d: "" });
  const [eid, setEid] = useState(null);
  const salvar = () => {
    if (!form.nome.trim() || !form.d) return;
    const item = { id: eid ?? Date.now(), nome: form.nome.trim(), d: parseFloat(form.d) };
    setConvs(c => eid ? c.map(x => x.id === eid ? item : x) : [...c, item]);
    setForm({ nome: "", d: "" }); setEid(null);
  };
  return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
    React.createElement(Card, null,
      React.createElement(Sec, null, eid ? "EDITAR" : "NOVO CONVÊNIO"),
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
        React.createElement(Inp, { value: form.nome, onChange: v => setForm(f => ({ ...f, nome: v })), placeholder: "Nome ou descrição (ex: Unimed, Coparticipação)" }),
        React.createElement("div", null,
          React.createElement("div", { style: { fontSize: 10.5, color: C.muted, marginBottom: 5 } }, "DEFLATOR (ex: 0.70 = 70% da tabela)"),
          React.createElement(Inp, { type: "number", value: form.d, onChange: v => setForm(f => ({ ...f, d: v })), placeholder: "ex: 0.75" })
        ),
        React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8 } },
          eid && React.createElement(Btn, { variant: "ghost", onClick: () => { setForm({ nome: "", d: "" }); setEid(null); } }, "Cancelar"),
          React.createElement(Btn, { onClick: salvar, disabled: !form.nome.trim() || !form.d }, eid ? "Salvar" : "Cadastrar")
        )
      )
    ),
    convs.map(c => React.createElement(Card, { key: c.id, style: { padding: "12px 14px" } },
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
        React.createElement("div", { style: { flex: 1 } },
          React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 3 } }, c.nome),
          React.createElement("div", { style: { fontSize: 12, color: C.muted } }, "Deflator: ", React.createElement("span", { style: { color: C.gold, fontWeight: 700 } }, `${(c.d * 100).toFixed(0)}%`))
        ),
        React.createElement(Btn, { variant: "ghost", onClick: () => { setForm({ nome: c.nome, d: c.d }); setEid(c.id); }, style: { padding: "5px 9px" } }, "Editar"),
        React.createElement(Btn, { variant: "danger", onClick: () => setConvs(cs => cs.filter(x => x.id !== c.id)), style: { padding: "5px 9px" } }, "✕")
      )
    ))
  );
}

// ——— App ———
function App() {
  const [tab, setTab] = useState("calc");
  const [convs, setConvs] = useState(CONVS);
  const tabs = [{ id: "calc", label: "Calculadora" }, { id: "conv", label: `Convênios (${convs.length})` }];
  return React.createElement("div", { style: { minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'DM Sans','Segoe UI',sans-serif" } },
    React.createElement("div", {
      style: { background: C.surface + "f0", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.border}`, padding: "13px 16px", position: "sticky", top: 0, zIndex: 20 }
    },
      React.createElement("div", { style: { fontSize: 10, color: C.gold, fontWeight: 800, letterSpacing: "0.15em" } }, "CHM 2018 · 856 PROCEDIMENTOS"),
      React.createElement("div", { style: { fontSize: 19, fontWeight: 900, letterSpacing: "-0.02em" } }, "Calculadora de Honorários")
    ),
    React.createElement("div", {
      style: { display: "flex", background: C.surface, borderBottom: `1px solid ${C.border}`, position: "sticky", top: 57, zIndex: 19 }
    },
      tabs.map(t => React.createElement("button", {
        key: t.id, onClick: () => setTab(t.id),
        style: { flex: 1, padding: "11px 4px", background: "none", border: "none", borderBottom: tab === t.id ? `2px solid ${C.gold}` : "2px solid transparent", color: tab === t.id ? C.gold : C.muted, fontWeight: tab === t.id ? 700 : 400, fontSize: 13, cursor: "pointer" }
      }, t.label))
    ),
    React.createElement("div", { style: { padding: "14px 14px 40px", maxWidth: 580, margin: "0 auto" } },
      tab === "calc" && React.createElement(Calc, { convs }),
      tab === "conv" && React.createElement(Convs, { convs, setConvs })
    ),
    React.createElement("div", { style: { textAlign: "center", padding: "0 16px 28px", fontSize: 9.5, color: C.dim } },
      "Tabela CHM 2018 · UCO R$20,47 · Valores de convênio são estimativas"
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
