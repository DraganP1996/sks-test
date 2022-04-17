import { Market, MarketCategory } from "src/app/store/store.model";

export const marketCategories: MarketCategory<Market>[] = [
    {
      Name: "Principale",
      id: 101,
      Order: 1,
      Markets: [
        {
          id: 1,
          Name: "1X2",
          Order: 1,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 2,
          Name: "Doppia Chance",
          Order: 2,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 50,
          Name: "Over/Under 1.5",
          Order: 5,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 51,
          Name: "Over/Under 2.5",
          Order: 6,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 10,
          Name: "Gol/No Gol",
          Order: 10,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Over/Under",
      id: 694,
      Order: 2,
      Markets: [
        {
          id: 55,
          Name: "Over/Under 0.5",
          Order: 4,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 50,
          Name: "Over/Under 1.5",
          Order: 5,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 51,
          Name: "Over/Under 2.5",
          Order: 6,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 52,
          Name: "Over/Under 3.5",
          Order: 7,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 53,
          Name: "Over/Under 4.5 ",
          Order: 8,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 116,
          Name: "Over/Under 5.5",
          Order: 9,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "GG Special",
      id: 24,
      Order: 3,
      Markets: [
        {
          id: 252,
          Name: "Gol/No Gol 1Tempo",
          Order: 11,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 253,
          Name: "Gol/No Gol 2Tempo",
          Order: 12,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 478,
          Name: "GG/NG 1&2Tempo",
          Order: 13,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Handicap",
      id: 703,
      Order: 4,
      Markets: [
        {
          id: 703,
          Name: "Handicap Calcio",
          Order: 14,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Parziale/Finale",
      id: 700,
      Order: 5,
      Markets: [
        {
          id: 6,
          Name: "Parziale/Finale",
          Order: 15,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 700,
          Name: "Parziale/Finale Spec",
          Order: 16,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Risultato Esatto",
      id: 7,
      Order: 6,
      Markets: [
        {
          id: 7,
          Name: "Risultato Esatto",
          Order: 17,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "P/F+GG/NG",
      id: 2080,
      Order: 6,
      Markets: [
        {
          id: 1219,
          Name: "P/F+GG/NG",
          Order: 17,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Risultato Esatto Primo Tempo",
      id: 8,
      Order: 7,
      Markets: [
        {
          id: 8,
          Name: "Ris.Esatto 1 Tempo",
          Order: 18,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Risultato Esatto Secondo Tempo",
      id: 251,
      Order: 8,
      Markets: [
        {
          id: 251,
          Name: "Ris.Esatto 2 Tempo",
          Order: 19,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Ris.Esatto Multi1",
      id: 2081,
      Order: 8,
      Markets: [
        {
          id: 1220,
          Name: "Ris.Esatto Multi1",
          Order: 18,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Ris.Esatto Multi2",
      id: 2082,
      Order: 8,
      Markets: [
        {
          id: 1221,
          Name: "Ris.Esatto Multi2",
          Order: 18,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Ris.Esatto Multi3",
      id: 2083,
      Order: 8,
      Markets: [
        {
          id: 1222,
          Name: "Ris.Esatto Multi3",
          Order: 18,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Ris.Esatto Multi4",
      id: 2084,
      Order: 8,
      Markets: [
        {
          id: 1223,
          Name: "Ris.Esatto Multi4",
          Order: 18,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Ris.Esatto Multi5",
      id: 2085,
      Order: 8,
      Markets: [
        {
          id: 1224,
          Name: "Ris.Esatto Multi5",
          Order: 18,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Ris.Esatto 50 Esiti",
      id: 2086,
      Order: 8,
      Markets: [
        {
          id: 1225,
          Name: "Ris.Esatto 50 Esiti",
          Order: 18,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Risultato Esatto P/F",
      id: 2054,
      Order: 9,
      Markets: [
        {
          id: 1161,
          Name: "Risultato Esatto P/F",
          Order: 20,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Primo Tempo",
      id: 22,
      Order: 10,
      Markets: [
        {
          id: 12,
          Name: "Primo Tempo",
          Order: 21,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 77,
          Name: "Doppia Chance 1Tempo",
          Order: 22,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Handicap 1 Tempo",
      id: 2166,
      Order: 11,
      Markets: [
        {
          id: 1305,
          Name: "Handicap 1 Tempo",
          Order: 23,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Secondo Tempo",
      id: 23,
      Order: 12,
      Markets: [
        {
          id: 63,
          Name: "Secondo Tempo",
          Order: 24,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 417,
          Name: "Doppia Chance 2Tempo",
          Order: 25,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Pari/Dispari",
      id: 21,
      Order: 13,
      Markets: [
        {
          id: 5,
          Name: "Pari/Dispari",
          Order: 27,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 254,
          Name: "Pari/Disp 1Tempo",
          Order: 28,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 255,
          Name: "Pari/Disp 2Tempo",
          Order: 29,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 717,
          Name: "Pari/Dispari Casa/Tr",
          Order: 30,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Combo",
      id: 424,
      Order: 14,
      Markets: [
        {
          id: 424,
          Name: "Combo",
          Order: 31,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Combo Primo Tempo",
      id: 695,
      Order: 15,
      Markets: [
        {
          id: 695,
          Name: "Combo Primo Tempo",
          Order: 32,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Combo Secondo Tempo",
      id: 697,
      Order: 16,
      Markets: [
        {
          id: 697,
          Name: "Combo Secondo Tempo",
          Order: 33,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "DC Combo",
      id: 501,
      Order: 17,
      Markets: [
        {
          id: 501,
          Name: "DC Combo",
          Order: 34,
          IsNewMarket: true,
          ShortName: null
        }
      ]
    },
    {
      Name: "DC Combo Primo Tempo",
      id: 706,
      Order: 18,
      Markets: [
        {
          id: 706,
          Name: "DC Combo Primo Tempo",
          Order: 35,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "DC Combo Secondo Tempo",
      id: 707,
      Order: 18,
      Markets: [
        {
          id: 707,
          Name: "DC Combo Sec.Tempo",
          Order: 36,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "3Combo",
      id: 863,
      Order: 19,
      Markets: [
        {
          id: 863,
          Name: "3Combo",
          Order: 37,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 900,
          Name: "3ComboHT",
          Order: 37,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Multi Gol",
      id: 58,
      Order: 21,
      Markets: [
        {
          id: 58,
          Name: "Multi Gol",
          Order: 40,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Multi Gol 1/2 Tempo",
      id: 688,
      Order: 22,
      Markets: [
        {
          id: 688,
          Name: "Multi Gol 1T",
          Order: 41,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 689,
          Name: "Multi Gol 2T",
          Order: 42,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Multi Gol Casa/Trasf",
      id: 690,
      Order: 23,
      Markets: [
        {
          id: 690,
          Name: "Multi Gol Casa",
          Order: 43,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 691,
          Name: "Multi Gol Trasferta",
          Order: 44,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Combo Multigol",
      id: 2053,
      Order: 24,
      Markets: [
        {
          id: 1160,
          Name: "Combo Multigol",
          Order: 65,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "DC+Multigol",
      id: 2076,
      Order: 25,
      Markets: [
        {
          id: 1207,
          Name: "DC+Multigol",
          Order: 66,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "ChanceMix",
      id: 500,
      Order: 26,
      Markets: [
        {
          id: 500,
          Name: "Chance Mix",
          Order: 67,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "HT Chance Mix",
      id: 722,
      Order: 27,
      Markets: [
        {
          id: 722,
          Name: "HT Ch. Mix",
          Order: 68,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "3ChanceMix",
      id: 950,
      Order: 28,
      Markets: [
        {
          id: 950,
          Name: "3ChanceMix",
          Order: 69,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Vince a 0",
      id: 698,
      Order: 29,
      Markets: [
        {
          id: 409,
          Name: "Casa Vince a 0",
          Order: 70,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 410,
          Name: "Trasferta Vince a 0",
          Order: 71,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 698,
          Name: "Casa Vince a 0 - 1T",
          Order: 72,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 699,
          Name: "Trasf Vince a 0 - 1T",
          Order: 73,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 701,
          Name: "Casa Vince a 0 - 2T",
          Order: 74,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 702,
          Name: "Trasf Vince a 0 - 2T",
          Order: 75,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Vince Almeno un Tempo",
      id: 2164,
      Order: 30,
      Markets: [
        {
          id: 1303,
          Name: "Vince Almeno 1 Tempo",
          Order: 76,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Vince Entrambi Tempi",
      id: 718,
      Order: 31,
      Markets: [
        {
          id: 718,
          Name: "Vince Entrambi Tempi",
          Order: 77,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Segna Entrambi i Tempi",
      id: 2165,
      Order: 32,
      Markets: [
        {
          id: 1304,
          Name: "Segna Entrambi Tempi",
          Order: 78,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Primo Gol",
      id: 31,
      Order: 33,
      Markets: [
        {
          id: 517,
          Name: "1°Gol",
          Order: 79,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 502,
          Name: "1°Gol DC",
          Order: 80,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Metodo Primo Gol",
      id: 2050,
      Order: 34,
      Markets: [
        {
          id: 1157,
          Name: "Metodo Primo Gol",
          Order: 81,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Minuto del Primo Gol",
      id: 2057,
      Order: 35,
      Markets: [
        {
          id: 1164,
          Name: "Minuto del Primo Gol",
          Order: 81,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Minuto Ultimo Goal",
      id: 2241,
      Order: 36,
      Markets: [
        {
          id: 1381,
          Name: "Minuto Ultimo Goal",
          Order: 81,
          IsNewMarket: true,
          ShortName: null
        }
      ]
    },
    {
      Name: "Primo Gol Primo Tempo",
      id: 506,
      Order: 37,
      Markets: [
        {
          id: 506,
          Name: "1°Gol 1°Tempo",
          Order: 82,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 507,
          Name: "1°Gol DC - 1°Tempo",
          Order: 83,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Primo Gol Secondo Tempo",
      id: 509,
      Order: 37,
      Markets: [
        {
          id: 509,
          Name: "1°Gol 2°Tempo",
          Order: 85,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 510,
          Name: "1°Gol DC - 2°Tempo",
          Order: 86,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Tempo 1 Gol",
      id: 514,
      Order: 37,
      Markets: [
        {
          id: 514,
          Name: "Tempo 1°Gol",
          Order: 88,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 777,
          Name: "Tempo 1°Gol Casa",
          Order: 89,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 778,
          Name: "Tempo 1°Gol Tras.",
          Order: 90,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Primo Gol/Finale",
      id: 2074,
      Order: 38,
      Markets: [
        {
          id: 1204,
          Name: "Primo Gol/Finale",
          Order: 91,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "O/U Primo Tempo",
      id: 27,
      Order: 39,
      Markets: [
        {
          id: 59,
          Name: "Over/Under 0.5 1T",
          Order: 92,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 60,
          Name: "Over/Under 1.5 1T",
          Order: 93,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 112,
          Name: "Over/Under 2.5 1T",
          Order: 94,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 113,
          Name: "Over/Under 3.5 1T",
          Order: 95,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "O/U Secondo Tempo",
      id: 28,
      Order: 40,
      Markets: [
        {
          id: 61,
          Name: "Over/Under 0.5 2T",
          Order: 96,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 62,
          Name: "Over/Under 1.5 2T",
          Order: 97,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 367,
          Name: "Over/Under 2.5 2T",
          Order: 98,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 560,
          Name: "Over/Under 3.5 2T",
          Order: 99,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Over/Under 1/2Tempo",
      id: 2077,
      Order: 41,
      Markets: [
        {
          id: 1208,
          Name: "OU 0.5 1T&OU 0.5 2T",
          Order: 100,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 1209,
          Name: "OU 0.5 1T&OU 1.5 2T",
          Order: 101,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 1210,
          Name: "OU 0.5 1T&OU 2.5 2T",
          Order: 102,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 1211,
          Name: "OU 1.5 1T&OU 0.5 2T",
          Order: 103,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 1212,
          Name: "OU 1.5 1T&OU 1.5 2T",
          Order: 104,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 1213,
          Name: "OU 1.5 1T&OU 2.5 2T",
          Order: 105,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 1214,
          Name: "OU 2.5 1T&OU 0.5 2T",
          Order: 106,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 1215,
          Name: "OU 2.5 1T&OU 1.5 2T",
          Order: 107,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 1216,
          Name: "OU 2.5 1T&OU 2.5 2T",
          Order: 108,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Casa O/U",
      id: 25,
      Order: 42,
      Markets: [
        {
          id: 405,
          Name: "Casa Over/Under 0.5",
          Order: 109,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 406,
          Name: "Casa Over/Under 1.5",
          Order: 110,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 382,
          Name: "Casa Over/Under 2.5",
          Order: 111,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 465,
          Name: "Casa Over/Under 3.5",
          Order: 112,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Trasferta O/U",
      id: 26,
      Order: 43,
      Markets: [
        {
          id: 407,
          Name: "Tras. Over/Under 0.5",
          Order: 113,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 408,
          Name: "Tras. Over/Under 1.5",
          Order: 114,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 384,
          Name: "Tras. Over/Under 2.5",
          Order: 115,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 467,
          Name: "Tras. Over/Under 3.5",
          Order: 116,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "C OU 1/2 T",
      id: 113,
      Order: 44,
      Markets: [
        {
          id: 625,
          Name: "Casa O/U Primo Tempo",
          Order: 117,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 775,
          Name: "Casa O/U Sec. Tempo",
          Order: 119,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "T OU 1/2 T",
      id: 114,
      Order: 45,
      Markets: [
        {
          id: 627,
          Name: "Tras.O/U Primo Tempo",
          Order: 118,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 776,
          Name: "Tras.O/U Sec. Tempo",
          Order: 120,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Gol Totali Sì/No",
      id: 38,
      Order: 46,
      Markets: [
        {
          id: 38,
          Name: "Gol Totali Sì/No",
          Order: 121,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Gol Totali Casa/Trasf",
      id: 693,
      Order: 47,
      Markets: [
        {
          id: 693,
          Name: "Gol Totali Casa",
          Order: 122,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 694,
          Name: "Gol Totali Trasferta",
          Order: 123,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Gol 1/2 Tempo",
      id: 479,
      Order: 48,
      Markets: [
        {
          id: 479,
          Name: "Gol 1/2 Tempo",
          Order: 126,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Gol Totali 1/2 Tempo Sì/No",
      id: 686,
      Order: 48,
      Markets: [
        {
          id: 686,
          Name: "Gol Totali Sì/No 1T",
          Order: 124,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 687,
          Name: "Gol Totali Sì/No 2T",
          Order: 125,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Tempo con Più Gol",
      id: 75,
      Order: 49,
      Markets: [
        {
          id: 75,
          Name: "Tempo con Più Gol",
          Order: 127,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 1202,
          Name: "Tempo Più Gol Casa",
          Order: 128,
          IsNewMarket: false,
          ShortName: null
        },
        {
          id: 1203,
          Name: "Tempo Più Gol Trasf.",
          Order: 129,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Margine Vittoria 4",
      id: 2163,
      Order: 50,
      Markets: [
        {
          id: 1302,
          Name: "Margine Vittoria 4",
          Order: 130,
          IsNewMarket: false,
          ShortName: null
        }
      ]
    },
    {
      Name: "Margine Vittoria 10",
      id: 2240,
      Order: 51,
      Markets: [
        {
          id: 1380,
          Name: "Margine Vittoria 10",
          Order: 131,
          IsNewMarket: true,
          ShortName: null
        }
      ]
    }
  ]