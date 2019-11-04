import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import FooterPage from "./components/Footer.js";
import Map from "./components/map/Map.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

const data = [
  { lat: 37.782551, lng: -122.44536800000003 },
  { lat: 37.782745, lng: -122.44458600000002 },
  { lat: 37.782842, lng: -122.44368800000001 },
  { lat: 37.782919, lng: -122.442815 },
  { lat: 37.782992, lng: -122.44211200000001 },
  { lat: 37.7831, lng: -122.441461 },
  { lat: 37.783206, lng: -122.44082900000001 },
  { lat: 37.783273, lng: -122.44032400000003 },
  { lat: 37.783316, lng: -122.440023 },
  { lat: 37.783357, lng: -122.439794 },
  { lat: 37.783371, lng: -122.43968699999999 },
  { lat: 37.783368, lng: -122.43966599999999 },
  { lat: 37.783383, lng: -122.439594 },
  { lat: 37.783508, lng: -122.439525 },
  { lat: 37.783842, lng: -122.43959100000001 },
  { lat: 37.784147, lng: -122.43966799999998 },
  { lat: 37.784206, lng: -122.439686 },
  { lat: 37.784386, lng: -122.43979000000002 },
  { lat: 37.784701, lng: -122.43990200000002 },
  { lat: 37.784965, lng: -122.43993799999998 },
  { lat: 37.78501, lng: -122.43994700000002 },
  { lat: 37.78536, lng: -122.439952 },
  { lat: 37.785715, lng: -122.44002999999998 },
  { lat: 37.786117, lng: -122.44011899999998 },
  { lat: 37.786564, lng: -122.44020899999998 },
  { lat: 37.786905, lng: -122.44027 },
  { lat: 37.786956, lng: -122.44027900000003 },
  { lat: 37.800224, lng: -122.43351999999999 },
  { lat: 37.800155, lng: -122.434101 },
  { lat: 37.80016, lng: -122.43443000000002 },
  { lat: 37.800378, lng: -122.434527 },
  { lat: 37.800738, lng: -122.434598 },
  { lat: 37.800938, lng: -122.43465000000003 },
  { lat: 37.801024, lng: -122.434889 },
  { lat: 37.800955, lng: -122.43539199999998 },
  { lat: 37.800886, lng: -122.43595900000003 },
  { lat: 37.800811, lng: -122.43627500000002 },
  { lat: 37.800788, lng: -122.43629900000002 },
  { lat: 37.800719, lng: -122.43630200000001 },
  { lat: 37.800702, lng: -122.43629799999997 },
  { lat: 37.800661, lng: -122.43627300000003 },
  { lat: 37.800395, lng: -122.436172 },
  { lat: 37.800228, lng: -122.43611599999997 },
  { lat: 37.800169, lng: -122.43612999999999 },
  { lat: 37.800066, lng: -122.43616700000001 },
  { lat: 37.784345, lng: -122.42292199999997 },
  { lat: 37.784389, lng: -122.42292600000002 },
  { lat: 37.784437, lng: -122.42292399999997 },
  { lat: 37.784746, lng: -122.422818 },
  { lat: 37.785436, lng: -122.42295899999999 },
  { lat: 37.78612, lng: -122.423112 },
  { lat: 37.786433, lng: -122.42302899999999 },
  { lat: 37.786631, lng: -122.42121299999997 },
  { lat: 37.78666, lng: -122.42103299999997 },
  { lat: 37.786801, lng: -122.420141 },
  { lat: 37.786823, lng: -122.42003399999999 },
  { lat: 37.786831, lng: -122.419916 },
  { lat: 37.787034, lng: -122.41820799999999 },
  { lat: 37.787056, lng: -122.41803400000003 },
  { lat: 37.787169, lng: -122.417145 },
  { lat: 37.787217, lng: -122.41671500000001 },
  { lat: 37.786144, lng: -122.416403 },
  { lat: 37.785292, lng: -122.41625699999997 },
  { lat: 37.780666, lng: -122.39037400000001 },
  { lat: 37.780501, lng: -122.39128099999999 },
  { lat: 37.780148, lng: -122.39205200000004 },
  { lat: 37.780173, lng: -122.39114799999999 },
  { lat: 37.780693, lng: -122.39059199999997 },
  { lat: 37.781261, lng: -122.391142 },
  { lat: 37.781808, lng: -122.39173 },
  { lat: 37.78234, lng: -122.39234099999999 },
  { lat: 37.782812, lng: -122.39302199999997 },
  { lat: 37.7833, lng: -122.39367199999998 },
  { lat: 37.783809, lng: -122.394275 },
  { lat: 37.784246, lng: -122.39497900000003 },
  { lat: 37.784791, lng: -122.39595800000001 },
  { lat: 37.785675, lng: -122.39674600000001 },
  { lat: 37.786262, lng: -122.39578 },
  { lat: 37.786776, lng: -122.39509299999997 },
  { lat: 37.787282, lng: -122.39442600000001 },
  { lat: 37.787783, lng: -122.39376700000003 },
  { lat: 37.788343, lng: -122.39318400000002 },
  { lat: 37.788895, lng: -122.39250600000003 },
  { lat: 37.789371, lng: -122.39170100000001 },
  { lat: 37.789722, lng: -122.39095199999997 },
  { lat: 37.790315, lng: -122.39030500000001 },
  { lat: 37.790738, lng: -122.38961599999999 },
  { lat: 37.779448, lng: -122.43870200000003 },
  { lat: 37.779023, lng: -122.43858499999999 },
  { lat: 37.778542, lng: -122.438492 },
  { lat: 37.7781, lng: -122.43841099999997 },
  { lat: 37.777986, lng: -122.438376 },
  { lat: 37.77768, lng: -122.438313 },
  { lat: 37.777316, lng: -122.43827299999998 },
  { lat: 37.777135, lng: -122.43825400000003 },
  { lat: 37.776987, lng: -122.43830300000002 },
  { lat: 37.776946, lng: -122.43840399999999 },
  { lat: 37.776944, lng: -122.438467 },
  { lat: 37.776892, lng: -122.43845899999997 },
  { lat: 37.776842, lng: -122.43844200000001 },
  { lat: 37.776822, lng: -122.43839100000002 },
  { lat: 37.776814, lng: -122.43841199999997 },
  { lat: 37.776787, lng: -122.438628 },
  { lat: 37.776729, lng: -122.43865 },
  { lat: 37.776759, lng: -122.43867699999998 },
  { lat: 37.776772, lng: -122.43849799999998 },
  { lat: 37.776787, lng: -122.43838900000003 },
  { lat: 37.776848, lng: -122.43828300000001 },
  { lat: 37.77687, lng: -122.43823900000001 },
  { lat: 37.777015, lng: -122.438198 },
  { lat: 37.777333, lng: -122.43825600000002 },
  { lat: 37.777595, lng: -122.438308 },
  { lat: 37.777797, lng: -122.43834400000003 },
  { lat: 37.77816, lng: -122.43844200000001 },
  { lat: 37.778414, lng: -122.43850800000001 },
  { lat: 37.778445, lng: -122.43851599999999 },
  { lat: 37.778503, lng: -122.43852900000002 },
  { lat: 37.778607, lng: -122.43854899999997 },
  { lat: 37.77867, lng: -122.43864400000001 },
  { lat: 37.778847, lng: -122.43870600000002 },
  { lat: 37.77924, lng: -122.43874399999999 },
  { lat: 37.779738, lng: -122.43882200000002 },
  { lat: 37.780201, lng: -122.43888200000004 },
  { lat: 37.7804, lng: -122.43890499999998 },
  { lat: 37.780501, lng: -122.438921 },
  { lat: 37.780892, lng: -122.438986 },
  { lat: 37.781446, lng: -122.43908699999997 },
  { lat: 37.781985, lng: -122.43919900000003 },
  { lat: 37.782239, lng: -122.43924900000002 },
  { lat: 37.782286, lng: -122.43926599999998 },
  { lat: 37.797847, lng: -122.42938800000002 },
  { lat: 37.797874, lng: -122.42917999999997 },
  { lat: 37.797885, lng: -122.42906900000003 },
  { lat: 37.797887, lng: -122.42905000000002 },
  { lat: 37.797933, lng: -122.42895399999998 },
  { lat: 37.798242, lng: -122.42899 },
  { lat: 37.798617, lng: -122.42907500000001 },
  { lat: 37.798719, lng: -122.42909199999997 },
  { lat: 37.798944, lng: -122.429145 },
  { lat: 37.79932, lng: -122.42925100000002 },
  { lat: 37.79959, lng: -122.42930899999999 },
  { lat: 37.799677, lng: -122.42932400000001 },
  { lat: 37.799966, lng: -122.42935999999997 },
  { lat: 37.800288, lng: -122.42943000000002 },
  { lat: 37.800443, lng: -122.429461 },
  { lat: 37.800465, lng: -122.42947400000003 },
  { lat: 37.800644, lng: -122.42953999999997 },
  { lat: 37.800948, lng: -122.42962 },
  { lat: 37.801242, lng: -122.429685 },
  { lat: 37.801375, lng: -122.42970200000002 },
  { lat: 37.8014, lng: -122.42970300000002 },
  { lat: 37.801453, lng: -122.42970700000001 },
  { lat: 37.801473, lng: -122.429709 },
  { lat: 37.801532, lng: -122.42970700000001 },
  { lat: 37.801852, lng: -122.42972900000001 },
  { lat: 37.802173, lng: -122.42978900000003 },
  { lat: 37.802459, lng: -122.429847 },
  { lat: 37.802554, lng: -122.429825 },
  { lat: 37.802647, lng: -122.42954900000001 },
  { lat: 37.802693, lng: -122.42917899999998 },
  { lat: 37.802729, lng: -122.42875100000003 },
  { lat: 37.766104, lng: -122.409291 },
  { lat: 37.766103, lng: -122.409268 },
  { lat: 37.766138, lng: -122.40922899999998 },
  { lat: 37.766183, lng: -122.40923099999998 },
  { lat: 37.766153, lng: -122.40927599999998 },
  { lat: 37.766005, lng: -122.40936499999998 },
  { lat: 37.765897, lng: -122.40957000000003 },
  { lat: 37.765767, lng: -122.409739 },
  { lat: 37.765693, lng: -122.41038900000001 },
  { lat: 37.765615, lng: -122.411201 },
  { lat: 37.765533, lng: -122.41212100000001 },
  { lat: 37.765467, lng: -122.412939 },
  { lat: 37.765444, lng: -122.41482100000002 },
  { lat: 37.765444, lng: -122.414964 },
  { lat: 37.765318, lng: -122.41542400000003 },
  { lat: 37.763961, lng: -122.41529600000001 },
  { lat: 37.763115, lng: -122.41519599999998 },
  { lat: 37.762967, lng: -122.41518300000001 },
  { lat: 37.762278, lng: -122.41512699999998 },
  { lat: 37.761675, lng: -122.415055 },
  { lat: 37.760932, lng: -122.414988 },
  { lat: 37.759337, lng: -122.41486199999997 },
  { lat: 37.773187, lng: -122.421922 },
  { lat: 37.773043, lng: -122.42211800000001 },
  { lat: 37.773007, lng: -122.422165 },
  { lat: 37.772979, lng: -122.42221899999998 },
  { lat: 37.772865, lng: -122.422394 },
  { lat: 37.772779, lng: -122.422503 },
  { lat: 37.772676, lng: -122.42270100000002 },
  { lat: 37.772606, lng: -122.42280599999998 },
  { lat: 37.772566, lng: -122.42284000000001 },
  { lat: 37.772508, lng: -122.42285200000003 },
  { lat: 37.772387, lng: -122.42301099999997 },
  { lat: 37.772099, lng: -122.42332799999997 },
  { lat: 37.771704, lng: -122.42378300000001 },
  { lat: 37.771481, lng: -122.424081 },
  { lat: 37.7714, lng: -122.42417899999998 },
  { lat: 37.771352, lng: -122.42421999999999 },
  { lat: 37.771248, lng: -122.424327 },
  { lat: 37.770904, lng: -122.424781 },
  { lat: 37.77052, lng: -122.42528299999998 },
  { lat: 37.770337, lng: -122.42555299999998 },
  { lat: 37.770128, lng: -122.42583200000001 },
  { lat: 37.769756, lng: -122.426331 },
  { lat: 37.7693, lng: -122.42690199999998 },
  { lat: 37.769132, lng: -122.42706499999997 },
  { lat: 37.769092, lng: -122.42710299999999 },
  { lat: 37.768979, lng: -122.42717199999998 },
  { lat: 37.768595, lng: -122.42763400000001 },
  { lat: 37.768372, lng: -122.42791299999999 },
  { lat: 37.768337, lng: -122.42796099999998 },
  { lat: 37.768244, lng: -122.42813799999999 },
  { lat: 37.767942, lng: -122.42858100000001 },
  { lat: 37.767482, lng: -122.42909400000002 },
  { lat: 37.767031, lng: -122.42960600000004 },
  { lat: 37.766732, lng: -122.42998599999999 },
  { lat: 37.76668, lng: -122.43005800000003 },
  { lat: 37.766633, lng: -122.43010900000002 },
  { lat: 37.76658, lng: -122.43021099999999 },
  { lat: 37.766367, lng: -122.43059399999999 },
  { lat: 37.76591, lng: -122.43113700000004 },
  { lat: 37.765353, lng: -122.431806 },
  { lat: 37.764962, lng: -122.432298 },
  { lat: 37.764868, lng: -122.43248599999998 },
  { lat: 37.764518, lng: -122.43291299999999 },
  { lat: 37.763435, lng: -122.43417299999999 },
  { lat: 37.762847, lng: -122.43495300000001 },
  { lat: 37.762291, lng: -122.43593499999997 },
  { lat: 37.762224, lng: -122.43607400000002 },
  { lat: 37.761957, lng: -122.436892 },
  { lat: 37.761652, lng: -122.43888600000002 },
  { lat: 37.761284, lng: -122.439955 },
  { lat: 37.76121, lng: -122.440068 },
  { lat: 37.761064, lng: -122.44072 },
  { lat: 37.76104, lng: -122.44141100000002 },
  { lat: 37.761048, lng: -122.44232399999999 },
  { lat: 37.760851, lng: -122.44311800000003 },
  { lat: 37.759977, lng: -122.444591 },
  { lat: 37.759913, lng: -122.44469800000002 },
  { lat: 37.759623, lng: -122.445065 },
  { lat: 37.758902, lng: -122.44515799999999 },
  { lat: 37.758428, lng: -122.44457 },
  { lat: 37.757687, lng: -122.44334000000003 },
  { lat: 37.757583, lng: -122.44324 },
  { lat: 37.757019, lng: -122.44278700000001 },
  { lat: 37.756603, lng: -122.44232199999999 },
  { lat: 37.75638, lng: -122.44160199999999 },
  { lat: 37.75579, lng: -122.44138199999998 },
  { lat: 37.754493, lng: -122.44213300000001 },
  { lat: 37.754361, lng: -122.442206 },
  { lat: 37.753719, lng: -122.44265000000001 },
  { lat: 37.753096, lng: -122.44291499999997 },
  { lat: 37.751617, lng: -122.44321100000002 },
  { lat: 37.751496, lng: -122.44324599999999 },
  { lat: 37.750733, lng: -122.44342799999998 },
  { lat: 37.750126, lng: -122.443536 },
  { lat: 37.750103, lng: -122.443784 },
  { lat: 37.75039, lng: -122.44400999999999 },
  { lat: 37.750448, lng: -122.44401299999998 },
  { lat: 37.750536, lng: -122.44403999999997 },
  { lat: 37.750493, lng: -122.444141 },
  { lat: 37.790859, lng: -122.402808 },
  { lat: 37.790864, lng: -122.40276799999998 },
  { lat: 37.790995, lng: -122.40253899999999 },
  { lat: 37.791148, lng: -122.40217200000001 },
  { lat: 37.791385, lng: -122.40131200000002 },
  { lat: 37.791405, lng: -122.40077600000001 },
  { lat: 37.791288, lng: -122.40052800000001 },
  { lat: 37.791113, lng: -122.400441 },
  { lat: 37.791027, lng: -122.400395 },
  { lat: 37.791094, lng: -122.40031099999999 },
  { lat: 37.791211, lng: -122.40018299999997 },
  { lat: 37.79106, lng: -122.39933400000001 },
  { lat: 37.790538, lng: -122.39871800000003 },
  { lat: 37.790095, lng: -122.39808600000003 },
  { lat: 37.789644, lng: -122.39735999999999 },
  { lat: 37.789254, lng: -122.39684399999999 },
  { lat: 37.788855, lng: -122.39639699999998 },
  { lat: 37.788483, lng: -122.395963 },
  { lat: 37.788015, lng: -122.39536499999997 },
  { lat: 37.787558, lng: -122.39473499999997 },
  { lat: 37.787472, lng: -122.39432299999999 },
  { lat: 37.78763, lng: -122.394025 },
  { lat: 37.787767, lng: -122.39398699999998 },
  { lat: 37.787486, lng: -122.394452 },
  { lat: 37.786977, lng: -122.39504299999999 },
  { lat: 37.786583, lng: -122.39555200000001 },
  { lat: 37.78654, lng: -122.39561000000003 },
  { lat: 37.786516, lng: -122.39565900000002 },
  { lat: 37.786378, lng: -122.39570700000002 },
  { lat: 37.786044, lng: -122.39536199999998 },
  { lat: 37.785598, lng: -122.39471500000002 },
  { lat: 37.785321, lng: -122.394361 },
  { lat: 37.785207, lng: -122.39423599999998 },
  { lat: 37.785751, lng: -122.39406200000002 },
  { lat: 37.785996, lng: -122.39388099999996 },
  { lat: 37.786092, lng: -122.39382999999998 },
  { lat: 37.785998, lng: -122.39389900000003 },
  { lat: 37.785114, lng: -122.394365 },
  { lat: 37.785022, lng: -122.39444100000003 },
  { lat: 37.784823, lng: -122.394635 },
  { lat: 37.784719, lng: -122.39462900000001 },
  { lat: 37.785069, lng: -122.39417600000002 },
  { lat: 37.7855, lng: -122.39364999999998 },
  { lat: 37.78577, lng: -122.39329099999998 },
  { lat: 37.785839, lng: -122.39315899999997 },
  { lat: 37.782651, lng: -122.40062799999998 },
  { lat: 37.782616, lng: -122.400599 },
  { lat: 37.782702, lng: -122.40046999999998 },
  { lat: 37.782915, lng: -122.400192 },
  { lat: 37.783137, lng: -122.39988700000004 },
  { lat: 37.783414, lng: -122.399519 },
  { lat: 37.783629, lng: -122.39923699999997 },
  { lat: 37.783688, lng: -122.399157 },
  { lat: 37.783716, lng: -122.39910600000002 },
  { lat: 37.783798, lng: -122.39907199999999 },
  { lat: 37.783997, lng: -122.39918599999999 },
  { lat: 37.784271, lng: -122.399538 },
  { lat: 37.784577, lng: -122.399948 },
  { lat: 37.784828, lng: -122.40026 },
  { lat: 37.784999, lng: -122.40047700000002 },
  { lat: 37.785113, lng: -122.40065099999998 },
  { lat: 37.785155, lng: -122.40070300000002 },
  { lat: 37.785192, lng: -122.40074900000002 },
  { lat: 37.785278, lng: -122.40083900000002 },
  { lat: 37.785387, lng: -122.40085699999997 },
  { lat: 37.785478, lng: -122.40089 },
  { lat: 37.785526, lng: -122.40102200000001 },
  { lat: 37.785598, lng: -122.40114800000003 },
  { lat: 37.785631, lng: -122.40120200000001 },
  { lat: 37.78566, lng: -122.40126700000002 },
  { lat: 37.803986, lng: -122.42603500000001 },
  { lat: 37.804102, lng: -122.42508900000001 },
  { lat: 37.804211, lng: -122.42415599999998 },
  { lat: 37.803861, lng: -122.423385 },
  { lat: 37.803151, lng: -122.42321400000003 },
  { lat: 37.802439, lng: -122.42307700000003 },
  { lat: 37.80174, lng: -122.42290500000001 },
  { lat: 37.801069, lng: -122.42278499999998 },
  { lat: 37.800345, lng: -122.42264899999998 },
  { lat: 37.799633, lng: -122.42260299999998 },
  { lat: 37.79975, lng: -122.42169999999999 },
  { lat: 37.799885, lng: -122.42085400000002 },
  { lat: 37.799209, lng: -122.42060700000002 },
  { lat: 37.795656, lng: -122.400395 },
  { lat: 37.795203, lng: -122.400304 },
  { lat: 37.778738, lng: -122.41558399999997 },
  { lat: 37.778812, lng: -122.415189 },
  { lat: 37.778824, lng: -122.41509200000002 },
  { lat: 37.778833, lng: -122.41493200000002 },
  { lat: 37.778834, lng: -122.414898 },
  { lat: 37.77874, lng: -122.41475700000001 },
  { lat: 37.778501, lng: -122.41443300000003 },
  { lat: 37.778182, lng: -122.41402600000004 },
  { lat: 37.777851, lng: -122.41362300000003 },
  { lat: 37.777486, lng: -122.41316599999999 },
  { lat: 37.777109, lng: -122.41267399999998 },
  { lat: 37.776743, lng: -122.41218600000002 },
  { lat: 37.77644, lng: -122.41179999999997 },
  { lat: 37.776295, lng: -122.41161399999999 },
  { lat: 37.776158, lng: -122.41143999999997 },
  { lat: 37.775806, lng: -122.41099700000001 },
  { lat: 37.775422, lng: -122.410484 },
  { lat: 37.775126, lng: -122.41008699999998 },
  { lat: 37.775012, lng: -122.409854 },
  { lat: 37.775164, lng: -122.40957300000002 },
  { lat: 37.775498, lng: -122.40917999999999 },
  { lat: 37.775868, lng: -122.40872999999999 },
  { lat: 37.776256, lng: -122.40823999999998 },
  { lat: 37.776519, lng: -122.40792799999997 },
  { lat: 37.776539, lng: -122.40790400000003 },
  { lat: 37.776595, lng: -122.40785399999999 },
  { lat: 37.776853, lng: -122.40754700000002 },
  { lat: 37.777234, lng: -122.40708699999999 },
  { lat: 37.777644, lng: -122.40655800000002 },
  { lat: 37.778066, lng: -122.40601700000002 },
  { lat: 37.778468, lng: -122.40549900000002 },
  { lat: 37.778866, lng: -122.40499499999999 },
  { lat: 37.779295, lng: -122.40445499999998 },
  { lat: 37.779695, lng: -122.40395000000001 },
  { lat: 37.779982, lng: -122.40358400000002 },
  { lat: 37.780295, lng: -122.40322300000003 },
  { lat: 37.780664, lng: -122.40276599999999 },
  { lat: 37.781043, lng: -122.402288 },
  { lat: 37.781399, lng: -122.40182299999998 },
  { lat: 37.781727, lng: -122.401407 },
  { lat: 37.781853, lng: -122.40124700000001 },
  { lat: 37.781894, lng: -122.40119500000003 },
  { lat: 37.782076, lng: -122.40097700000001 },
  { lat: 37.782338, lng: -122.40060299999999 },
  { lat: 37.782666, lng: -122.40013299999998 },
  { lat: 37.783048, lng: -122.39963399999999 },
  { lat: 37.78345, lng: -122.39919800000001 },
  { lat: 37.783791, lng: -122.398998 },
  { lat: 37.784177, lng: -122.39895899999999 },
  { lat: 37.784388, lng: -122.39897100000002 },
  { lat: 37.784404, lng: -122.39912800000002 },
  { lat: 37.784586, lng: -122.39952399999999 },
  { lat: 37.784835, lng: -122.39992699999999 },
  { lat: 37.785116, lng: -122.400307 },
  { lat: 37.785282, lng: -122.40053899999998 },
  { lat: 37.785346, lng: -122.40069199999999 },
  { lat: 37.765769, lng: -122.40720099999999 },
  { lat: 37.76579, lng: -122.40741400000002 },
  { lat: 37.765802, lng: -122.40775500000001 },
  { lat: 37.765791, lng: -122.40821900000003 },
  { lat: 37.765763, lng: -122.40875900000003 },
  { lat: 37.765726, lng: -122.40934800000002 },
  { lat: 37.765716, lng: -122.40988199999998 },
  { lat: 37.765708, lng: -122.41020200000003 },
  { lat: 37.765705, lng: -122.41025300000001 },
  { lat: 37.765707, lng: -122.410369 },
  { lat: 37.765692, lng: -122.41071999999997 },
  { lat: 37.765699, lng: -122.41121499999997 },
  { lat: 37.765687, lng: -122.411789 },
  { lat: 37.765666, lng: -122.412373 },
  { lat: 37.765598, lng: -122.41288299999997 },
  { lat: 37.765543, lng: -122.41303900000003 },
  { lat: 37.765532, lng: -122.41312499999998 },
  { lat: 37.7655, lng: -122.41355299999998 },
  { lat: 37.765448, lng: -122.41405299999997 },
  { lat: 37.765388, lng: -122.41464500000001 },
  { lat: 37.765323, lng: -122.41525000000001 },
  { lat: 37.765303, lng: -122.41584699999999 },
  { lat: 37.765251, lng: -122.41643899999997 },
  { lat: 37.765204, lng: -122.41701999999998 },
  { lat: 37.765172, lng: -122.41755599999999 },
  { lat: 37.765164, lng: -122.41807499999999 },
  { lat: 37.765153, lng: -122.41861799999998 },
  { lat: 37.765136, lng: -122.41911199999998 },
  { lat: 37.765129, lng: -122.419378 },
  { lat: 37.765119, lng: -122.41948100000002 },
  { lat: 37.7651, lng: -122.41985199999999 },
  { lat: 37.765083, lng: -122.42034899999999 },
  { lat: 37.765045, lng: -122.42093 },
  { lat: 37.764992, lng: -122.42148099999997 },
  { lat: 37.76498, lng: -122.421695 },
  { lat: 37.764993, lng: -122.42184299999997 },
  { lat: 37.764986, lng: -122.422255 },
  { lat: 37.764975, lng: -122.422823 },
  { lat: 37.764939, lng: -122.42341099999999 },
  { lat: 37.764902, lng: -122.424014 },
  { lat: 37.764853, lng: -122.424576 },
  { lat: 37.764826, lng: -122.42492199999998 },
  { lat: 37.764796, lng: -122.42537500000003 },
  { lat: 37.764782, lng: -122.42586900000003 },
  { lat: 37.764768, lng: -122.42608899999999 },
  { lat: 37.764766, lng: -122.42611699999998 },
  { lat: 37.764723, lng: -122.42627600000003 },
  { lat: 37.764681, lng: -122.426649 },
  { lat: 37.782012, lng: -122.4042 },
  { lat: 37.781574, lng: -122.40491099999997 },
  { lat: 37.781055, lng: -122.405597 },
  { lat: 37.780479, lng: -122.406341 },
  { lat: 37.779996, lng: -122.40693899999997 },
  { lat: 37.779459, lng: -122.40761299999997 },
  { lat: 37.778953, lng: -122.40822800000001 },
  { lat: 37.778409, lng: -122.408839 },
  { lat: 37.777842, lng: -122.40950099999998 },
  { lat: 37.777334, lng: -122.41018099999997 },
  { lat: 37.776809, lng: -122.41083600000002 },
  { lat: 37.77624, lng: -122.41151400000001 },
  { lat: 37.775725, lng: -122.41214500000001 },
  { lat: 37.77519, lng: -122.41280499999999 },
  { lat: 37.774672, lng: -122.41346399999998 },
  { lat: 37.774084, lng: -122.41418599999997 },
  { lat: 37.773533, lng: -122.413636 },
  { lat: 37.773021, lng: -122.41300899999999 },
  { lat: 37.772501, lng: -122.41237100000001 },
  { lat: 37.771964, lng: -122.41168099999999 },
  { lat: 37.771479, lng: -122.41107799999997 },
  { lat: 37.770992, lng: -122.41047700000001 },
  { lat: 37.770467, lng: -122.40980100000002 },
  { lat: 37.77009, lng: -122.408904 },
  { lat: 37.769657, lng: -122.40810299999998 },
  { lat: 37.769132, lng: -122.40727600000002 },
  { lat: 37.768564, lng: -122.40646900000002 },
  { lat: 37.76798, lng: -122.40574500000002 },
  { lat: 37.76738, lng: -122.40529900000001 },
  { lat: 37.766604, lng: -122.40529700000002 },
  { lat: 37.765838, lng: -122.40519999999998 },
  { lat: 37.765139, lng: -122.40513900000002 },
  { lat: 37.764457, lng: -122.40509400000002 },
  { lat: 37.763716, lng: -122.40514200000001 },
  { lat: 37.762932, lng: -122.40539799999999 },
  { lat: 37.762126, lng: -122.40581299999997 },
  { lat: 37.761344, lng: -122.40621499999997 },
  { lat: 37.760556, lng: -122.406495 },
  { lat: 37.759732, lng: -122.40648399999998 },
  { lat: 37.75891, lng: -122.406228 },
  { lat: 37.758182, lng: -122.40569499999998 },
  { lat: 37.757676, lng: -122.40511800000002 },
  { lat: 37.757039, lng: -122.40434600000003 },
  { lat: 37.756335, lng: -122.40371900000002 },
  { lat: 37.755503, lng: -122.40340600000002 },
  { lat: 37.754665, lng: -122.40324199999998 },
  { lat: 37.753837, lng: -122.40317199999998 },
  { lat: 37.752986, lng: -122.40311199999996 },
  { lat: 37.751266, lng: -122.40335500000003 }
];

const containerStyle = { position: "relative", width: "100%", height: "90%" };
class App extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Router>
        <Route path="/">
          <Nav />
          <Map positions={data} containerStyle={containerStyle} />

          <FooterPage />
        </Route>
      </Router>
    );
  }
}

export default App;
