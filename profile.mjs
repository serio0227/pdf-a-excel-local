export const PROFILE = {
  "version": 1,
  "name": "Informe digital → Investigación AT 1401",
  "sheet": "FORMATO INV AT 1401",
  "fields": [
    {
      "id": "eps",
      "label": "EPS",
      "group": "Afiliaciones",
      "targets": [
        {
          "cell": "C11",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.076,
        0.522,
        0.082
      ]
    },
    {
      "id": "epsCode",
      "label": "Código EPS",
      "group": "Afiliaciones",
      "targets": [
        {
          "cell": "W11",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.525,
        0.076,
        0.667,
        0.082
      ]
    },
    {
      "id": "arl",
      "label": "ARL",
      "group": "Afiliaciones",
      "targets": [
        {
          "cell": "AA11",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.669,
        0.076,
        0.845,
        0.082
      ]
    },
    {
      "id": "arlCode",
      "label": "Código ARL",
      "group": "Afiliaciones",
      "targets": [
        {
          "cell": "AQ11",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.847,
        0.076,
        0.978,
        0.082
      ]
    },
    {
      "id": "afp",
      "label": "AFP",
      "group": "Afiliaciones",
      "targets": [
        {
          "cell": "C13",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.095,
        0.347,
        0.101
      ]
    },
    {
      "id": "afpOther",
      "label": "¿Cuál AFP?",
      "group": "Afiliaciones",
      "targets": [
        {
          "cell": "X13",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.512,
        0.095,
        0.797,
        0.101
      ]
    },
    {
      "id": "afpCode",
      "label": "Código AFP",
      "group": "Afiliaciones",
      "targets": [
        {
          "cell": "AM13",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.799,
        0.095,
        0.978,
        0.101
      ]
    },
    {
      "id": "social",
      "label": "Seguro social",
      "group": "Afiliaciones",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "SI",
          "label": "Sí",
          "cell": "Q13",
          "box": [
            0.432,
            0.0855,
            0.4478,
            0.09480000000000001
          ]
        },
        {
          "value": "NO",
          "label": "No",
          "cell": "T13",
          "box": [
            0.4792,
            0.0855,
            0.495,
            0.09480000000000001
          ]
        }
      ]
    },
    {
      "id": "employerType",
      "label": "Tipo de vinculador",
      "group": "Empleador",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "1",
          "label": "Empleador",
          "cell": "S16",
          "box": [
            0.1023,
            0.1172,
            0.11810000000000001,
            0.1265
          ]
        },
        {
          "value": "2",
          "label": "Contratante",
          "cell": "AA16",
          "box": [
            0.2154,
            0.1172,
            0.23120000000000002,
            0.1265
          ]
        },
        {
          "value": "3",
          "label": "Cooperativa",
          "cell": "AP16",
          "box": [
            0.4442,
            0.1172,
            0.45999999999999996,
            0.1265
          ]
        }
      ]
    },
    {
      "id": "activity",
      "label": "Actividad económica",
      "group": "Empleador",
      "targets": [
        {
          "cell": "O18",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.59,
        0.112,
        0.899,
        0.129
      ]
    },
    {
      "id": "activityCode",
      "label": "Código actividad",
      "group": "Empleador",
      "targets": [
        {
          "cell": "AN18",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.901,
        0.123,
        0.978,
        0.129
      ]
    },
    {
      "id": "company",
      "label": "Razón social",
      "group": "Empleador",
      "targets": [
        {
          "cell": "C21",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.142,
        0.352,
        0.148
      ]
    },
    {
      "id": "companyId",
      "label": "Identificación empresa",
      "group": "Empleador",
      "targets": [
        {
          "cell": "AK21",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.704,
        0.142,
        0.978,
        0.148
      ]
    },
    {
      "id": "companyIdType",
      "label": "Tipo de documento empresa",
      "group": "Empleador",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "NIT",
          "label": "NIT",
          "cell": "X21",
          "box": [
            0.3743,
            0.1358,
            0.3901,
            0.1451
          ]
        },
        {
          "value": "CC",
          "label": "CC",
          "cell": "AA21",
          "box": [
            0.4081,
            0.1358,
            0.4239,
            0.1451
          ]
        },
        {
          "value": "CE",
          "label": "CE",
          "cell": "AD21",
          "box": [
            0.4442,
            0.1358,
            0.45999999999999996,
            0.1451
          ]
        },
        {
          "value": "NU",
          "label": "NU",
          "cell": "AG21",
          "box": [
            0.4812,
            0.1358,
            0.497,
            0.1451
          ]
        },
        {
          "value": "PA",
          "label": "PA",
          "cell": "AJ21",
          "box": [
            0.5142,
            0.1358,
            0.53,
            0.1451
          ]
        },
        {
          "value": "CD",
          "label": "CD",
          "cell": "",
          "box": [
            0.5484,
            0.1358,
            0.5642,
            0.1451
          ]
        },
        {
          "value": "SC",
          "label": "SC",
          "cell": "",
          "box": [
            0.5819,
            0.1358,
            0.5977,
            0.1451
          ]
        },
        {
          "value": "PE",
          "label": "PE",
          "cell": "",
          "box": [
            0.619,
            0.1358,
            0.6348,
            0.1451
          ]
        },
        {
          "value": "PT",
          "label": "PT",
          "cell": "",
          "box": [
            0.6537,
            0.1358,
            0.6695,
            0.1451
          ]
        }
      ]
    },
    {
      "id": "companyAddress",
      "label": "Dirección empresa",
      "group": "Empleador",
      "targets": [
        {
          "cell": "C24",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.16,
        0.518,
        0.166
      ]
    },
    {
      "id": "companyPhone",
      "label": "Teléfono empresa",
      "group": "Empleador",
      "targets": [
        {
          "cell": "AH24",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.52,
        0.16,
        0.626,
        0.166
      ]
    },
    {
      "id": "companyFax",
      "label": "Fax empresa",
      "group": "Empleador",
      "targets": [
        {
          "cell": "AO24",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.626,
        0.16,
        0.731,
        0.166
      ]
    },
    {
      "id": "companyDept",
      "label": "Departamento empresa",
      "group": "Empleador",
      "targets": [
        {
          "cell": "W27",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.733,
        0.16,
        0.899,
        0.166
      ]
    },
    {
      "id": "companyCity",
      "label": "Municipio empresa",
      "group": "Empleador",
      "targets": [
        {
          "cell": "AH27",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.645,
        0.179,
        0.804,
        0.185
      ]
    },
    {
      "id": "companyEmail",
      "label": "Correo empresa",
      "group": "Empleador",
      "targets": [
        {
          "cell": "C27",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.179,
        0.644,
        0.185
      ]
    },
    {
      "id": "companyZone",
      "label": "Zona empresa",
      "group": "Empleador",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "U",
          "label": "Urbana",
          "cell": "AR27",
          "box": [
            0.9034,
            0.173,
            0.9192,
            0.1823
          ]
        },
        {
          "value": "R",
          "label": "Rural",
          "cell": "AU27",
          "box": [
            0.941,
            0.173,
            0.9568,
            0.1823
          ]
        }
      ]
    },
    {
      "id": "sameCenter",
      "label": "Centro igual a sede principal",
      "group": "Centro de trabajo",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "SI",
          "label": "Sí",
          "cell": "X29",
          "box": [
            0.8136,
            0.1916,
            0.8294,
            0.2009
          ]
        },
        {
          "value": "NO",
          "label": "No",
          "cell": "Z29",
          "box": [
            0.8884,
            0.1916,
            0.9042,
            0.2009
          ]
        }
      ]
    },
    {
      "id": "centerActivity",
      "label": "Actividad del centro",
      "group": "Centro de trabajo",
      "targets": [
        {
          "cell": "M30",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.235,
        0.21,
        0.849,
        0.222
      ]
    },
    {
      "id": "centerCode",
      "label": "Código actividad centro",
      "group": "Centro de trabajo",
      "targets": [
        {
          "cell": "AN30",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.85,
        0.216,
        0.978,
        0.222
      ]
    },
    {
      "id": "centerAddress",
      "label": "Dirección del centro",
      "group": "Centro de trabajo",
      "targets": [
        {
          "cell": "C33",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.235,
        0.653,
        0.241
      ]
    },
    {
      "id": "centerPhone",
      "label": "Teléfono del centro",
      "group": "Centro de trabajo",
      "targets": [
        {
          "cell": "AH33",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.655,
        0.235,
        0.838,
        0.241
      ]
    },
    {
      "id": "centerFax",
      "label": "Fax del centro",
      "group": "Centro de trabajo",
      "targets": [
        {
          "cell": "AO33",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.84,
        0.235,
        0.978,
        0.241
      ]
    },
    {
      "id": "centerDept",
      "label": "Departamento del centro",
      "group": "Centro de trabajo",
      "targets": [
        {
          "cell": "C35",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.253,
        0.359,
        0.26
      ]
    },
    {
      "id": "centerDeptCode",
      "label": "Código departamento centro",
      "group": "Centro de trabajo",
      "targets": [
        {
          "cell": "R34",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.36,
        0.253,
        0.475,
        0.26
      ]
    },
    {
      "id": "centerCity",
      "label": "Municipio del centro",
      "group": "Centro de trabajo",
      "targets": [
        {
          "cell": "V35",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.477,
        0.253,
        0.757,
        0.26
      ]
    },
    {
      "id": "centerCityCode",
      "label": "Código municipio centro",
      "group": "Centro de trabajo",
      "targets": [
        {
          "cell": "AK34",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.759,
        0.253,
        0.89,
        0.26
      ]
    },
    {
      "id": "centerZone",
      "label": "Zona del centro",
      "group": "Centro de trabajo",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "U",
          "label": "Urbana",
          "cell": "AP35",
          "box": [
            0.9051,
            0.2474,
            0.9209,
            0.2567
          ]
        },
        {
          "value": "R",
          "label": "Rural",
          "cell": "AT35",
          "box": [
            0.9427,
            0.2474,
            0.9585,
            0.2567
          ]
        }
      ]
    },
    {
      "id": "employment",
      "label": "Vinculación trabajador",
      "group": "Trabajador",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "1",
          "label": "Planta",
          "cell": "N38",
          "box": [
            0.1473,
            0.2758,
            0.1631,
            0.28509999999999996
          ]
        },
        {
          "value": "2",
          "label": "Misión",
          "cell": "S38",
          "box": [
            0.2522,
            0.2758,
            0.26799999999999996,
            0.28509999999999996
          ]
        },
        {
          "value": "3",
          "label": "Cooperado",
          "cell": "X38",
          "box": [
            0.3878,
            0.2758,
            0.40359999999999996,
            0.28509999999999996
          ]
        },
        {
          "value": "4",
          "label": "Estudiante o aprendiz",
          "cell": "AG38",
          "box": [
            0.5819,
            0.2758,
            0.5977,
            0.28509999999999996
          ]
        },
        {
          "value": "5",
          "label": "Independiente",
          "cell": "AN38",
          "box": [
            0.7333,
            0.2758,
            0.7491,
            0.28509999999999996
          ]
        }
      ]
    },
    {
      "id": "name",
      "label": "Nombre completo",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "C9",
          "prefix": "NOMBRE DEL ACCIDENTADO:\n",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": true,
      "box": [
        0.025,
        0.319,
        0.627,
        0.326
      ]
    },
    {
      "id": "firstName",
      "label": "Primer nombre",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "AA41",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "derived": 0,
      "note": "Separación sugerida: revise nombres y apellidos."
    },
    {
      "id": "middleName",
      "label": "Segundo nombre",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "AK41",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "derived": 1,
      "note": "Separación sugerida: revise nombres y apellidos."
    },
    {
      "id": "lastName",
      "label": "Primer apellido",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "C41",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "derived": 2,
      "note": "Separación sugerida: revise nombres y apellidos."
    },
    {
      "id": "secondLastName",
      "label": "Segundo apellido",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "O41",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "derived": 3,
      "note": "Separación sugerida: revise nombres y apellidos."
    },
    {
      "id": "job",
      "label": "Cargo",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "AH50",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        },
        {
          "cell": "AF9",
          "prefix": "CARGO:\n",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.792,
        0.282,
        0.978,
        0.289
      ]
    },
    {
      "id": "birth",
      "label": "Fecha de nacimiento",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "Z44",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "date",
      "page": 1,
      "required": false,
      "box": [
        0.629,
        0.319,
        0.872,
        0.326
      ]
    },
    {
      "id": "sex",
      "label": "Sexo",
      "group": "Trabajador",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "M",
          "label": "Masculino",
          "cell": "AP44",
          "box": [
            0.9039,
            0.313,
            0.9197000000000001,
            0.3223
          ]
        },
        {
          "value": "F",
          "label": "Femenino",
          "cell": "AT44",
          "box": [
            0.9414,
            0.313,
            0.9572,
            0.3223
          ]
        }
      ]
    },
    {
      "id": "idType",
      "label": "Tipo de documento",
      "group": "Trabajador",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "CC",
          "label": "CC",
          "cell": "D44",
          "box": [
            0.0422,
            0.3314,
            0.058,
            0.34069999999999995
          ]
        },
        {
          "value": "CE",
          "label": "CE",
          "cell": "G44",
          "box": [
            0.079,
            0.3314,
            0.0948,
            0.34069999999999995
          ]
        },
        {
          "value": "NU",
          "label": "NU",
          "cell": "J44",
          "box": [
            0.118,
            0.3314,
            0.1338,
            0.34069999999999995
          ]
        },
        {
          "value": "PA",
          "label": "PA",
          "cell": "P44",
          "box": [
            0.1561,
            0.3314,
            0.1719,
            0.34069999999999995
          ]
        },
        {
          "value": "TI",
          "label": "TI",
          "cell": "M44",
          "box": [
            0.1956,
            0.3314,
            0.2114,
            0.34069999999999995
          ]
        },
        {
          "value": "CD",
          "label": "CD",
          "cell": "",
          "box": [
            0.2324,
            0.3314,
            0.2482,
            0.34069999999999995
          ]
        },
        {
          "value": "SC",
          "label": "SC",
          "cell": "",
          "box": [
            0.2675,
            0.3314,
            0.2833,
            0.34069999999999995
          ]
        },
        {
          "value": "PE",
          "label": "PE",
          "cell": "",
          "box": [
            0.2995,
            0.3314,
            0.31529999999999997,
            0.34069999999999995
          ]
        },
        {
          "value": "PT",
          "label": "PT",
          "cell": "",
          "box": [
            0.3363,
            0.3314,
            0.35209999999999997,
            0.34069999999999995
          ]
        }
      ]
    },
    {
      "id": "id",
      "label": "Número de identificación",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "Q44",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": true,
      "box": [
        0.374,
        0.338,
        0.666,
        0.345
      ]
    },
    {
      "id": "phone",
      "label": "Teléfono trabajador",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "AH47",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.669,
        0.338,
        0.873,
        0.345
      ]
    },
    {
      "id": "fax",
      "label": "Fax trabajador",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "AO47",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.875,
        0.338,
        0.978,
        0.345
      ]
    },
    {
      "id": "address",
      "label": "Dirección trabajador",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "C47",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.356,
        0.44,
        0.363
      ]
    },
    {
      "id": "dept",
      "label": "Departamento trabajador",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "C50",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.442,
        0.356,
        0.59,
        0.363
      ]
    },
    {
      "id": "city",
      "label": "Municipio trabajador",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "O50",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.669,
        0.356,
        0.799,
        0.363
      ]
    },
    {
      "id": "zone",
      "label": "Zona trabajador",
      "group": "Trabajador",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "U",
          "label": "Urbana",
          "cell": "AC50",
          "box": [
            0.9034,
            0.3502,
            0.9192,
            0.3595
          ]
        },
        {
          "value": "R",
          "label": "Rural",
          "cell": "AF50",
          "box": [
            0.9409,
            0.3502,
            0.9567,
            0.3595
          ]
        }
      ]
    },
    {
      "id": "occupation",
      "label": "Ocupación habitual",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "I52",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.375,
        0.584,
        0.382
      ]
    },
    {
      "id": "occupationCode",
      "label": "Código ocupación",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "U52",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.586,
        0.375,
        0.666,
        0.382
      ]
    },
    {
      "id": "tenure",
      "label": "Tiempo en ocupación",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "AP52",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.669,
        0.375,
        0.978,
        0.382
      ]
    },
    {
      "id": "startDate",
      "label": "Fecha de ingreso",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "C55",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "date",
      "page": 1,
      "required": false,
      "box": [
        0.15,
        0.394,
        0.299,
        0.401
      ]
    },
    {
      "id": "salary",
      "label": "Salario mensual",
      "group": "Trabajador",
      "targets": [
        {
          "cell": "O55",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "number",
      "page": 1,
      "required": false,
      "box": [
        0.301,
        0.394,
        0.587,
        0.401
      ]
    },
    {
      "id": "shift",
      "label": "Jornada habitual",
      "group": "Trabajador",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "1",
          "label": "Diurna",
          "cell": "AB55",
          "box": [
            0.6733,
            0.3866,
            0.6891,
            0.3959
          ]
        },
        {
          "value": "2",
          "label": "Nocturna",
          "cell": "AH55",
          "box": [
            0.7766,
            0.3866,
            0.7924,
            0.3959
          ]
        },
        {
          "value": "3",
          "label": "Mixta",
          "cell": "AM55",
          "box": [
            0.8525,
            0.3866,
            0.8683000000000001,
            0.3959
          ]
        },
        {
          "value": "4",
          "label": "Turnos",
          "cell": "AS55",
          "box": [
            0.9397,
            0.3866,
            0.9555,
            0.3959
          ]
        }
      ]
    },
    {
      "id": "accidentDate",
      "label": "Fecha del accidente",
      "group": "Accidente",
      "targets": [
        {
          "cell": "C60",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "date",
      "page": 1,
      "required": true,
      "box": [
        0.025,
        0.423,
        0.218,
        0.428
      ]
    },
    {
      "id": "time",
      "label": "Hora del accidente",
      "group": "Accidente",
      "targets": [
        {
          "cell": "O60",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "time",
      "page": 1,
      "required": true,
      "box": [
        0.22,
        0.423,
        0.42,
        0.428
      ]
    },
    {
      "id": "weekday",
      "label": "Día de la semana",
      "group": "Accidente",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "Lunes",
          "label": "Lunes",
          "cell": "AF60",
          "box": [
            0,
            0,
            0,
            0
          ]
        },
        {
          "value": "Martes",
          "label": "Martes",
          "cell": "AH60",
          "box": [
            0,
            0,
            0,
            0
          ]
        },
        {
          "value": "Miércoles",
          "label": "Miércoles",
          "cell": "AJ60",
          "box": [
            0,
            0,
            0,
            0
          ]
        },
        {
          "value": "Jueves",
          "label": "Jueves",
          "cell": "AL60",
          "box": [
            0,
            0,
            0,
            0
          ]
        },
        {
          "value": "Viernes",
          "label": "Viernes",
          "cell": "AN60",
          "box": [
            0,
            0,
            0,
            0
          ]
        },
        {
          "value": "Sábado",
          "label": "Sábado",
          "cell": "AP60",
          "box": [
            0,
            0,
            0,
            0
          ]
        },
        {
          "value": "Domingo",
          "label": "Domingo",
          "cell": "AR60",
          "box": [
            0,
            0,
            0,
            0
          ]
        }
      ],
      "textBox": [
        0.421,
        0.423,
        0.667,
        0.428
      ]
    },
    {
      "id": "accidentShift",
      "label": "Jornada del accidente",
      "group": "Accidente",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "1",
          "label": "Normal",
          "cell": "F64",
          "box": [
            0.7985,
            0.4157,
            0.8143,
            0.425
          ]
        },
        {
          "value": "2",
          "label": "Extra",
          "cell": "J64",
          "box": [
            0.8774,
            0.4157,
            0.8932,
            0.425
          ]
        }
      ]
    },
    {
      "id": "usualWork",
      "label": "Labor habitual",
      "group": "Accidente",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "SI",
          "label": "Sí",
          "cell": "N64",
          "box": [
            0.143,
            0.4343,
            0.1588,
            0.4436
          ]
        },
        {
          "value": "NO",
          "label": "No",
          "cell": "Q64",
          "box": [
            0.2022,
            0.4343,
            0.218,
            0.4436
          ]
        }
      ]
    },
    {
      "id": "otherWork",
      "label": "Labor realizada si no es habitual",
      "group": "Accidente",
      "targets": [
        {
          "cell": "T64",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.456,
        0.407,
        0.462
      ]
    },
    {
      "id": "workedTime",
      "label": "Tiempo trabajado antes del accidente",
      "group": "Accidente",
      "targets": [
        {
          "cell": "J65",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.589,
        0.456,
        0.978,
        0.462
      ]
    },
    {
      "id": "accidentType",
      "label": "Tipo de accidente",
      "group": "Accidente",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "1",
          "label": "Violencia",
          "cell": "T66",
          "box": [
            0.196,
            0.4677,
            0.21180000000000002,
            0.477
          ]
        },
        {
          "value": "2",
          "label": "Tránsito",
          "cell": "X66",
          "box": [
            0.3138,
            0.4677,
            0.3296,
            0.477
          ]
        },
        {
          "value": "3",
          "label": "Deportivo",
          "cell": "AC66",
          "box": [
            0.4424,
            0.4677,
            0.4582,
            0.477
          ]
        },
        {
          "value": "4",
          "label": "Recreativo o cultural",
          "cell": "AL66",
          "box": [
            0.6403,
            0.4677,
            0.6561,
            0.477
          ]
        },
        {
          "value": "5",
          "label": "Propios del trabajo",
          "cell": "AT66",
          "box": [
            0.8262,
            0.4677,
            0.8420000000000001,
            0.477
          ]
        }
      ]
    },
    {
      "id": "fatal",
      "label": "¿Causó la muerte?",
      "group": "Accidente",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "SI",
          "label": "Sí",
          "cell": "F70",
          "box": [
            0.1075,
            0.4863,
            0.12329999999999999,
            0.4956
          ]
        },
        {
          "value": "NO",
          "label": "No",
          "cell": "J70",
          "box": [
            0.1668,
            0.4863,
            0.1826,
            0.4956
          ]
        }
      ]
    },
    {
      "id": "accidentDept",
      "label": "Departamento accidente",
      "group": "Accidente",
      "targets": [
        {
          "cell": "L70",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.252,
        0.4938,
        0.512,
        0.5
      ]
    },
    {
      "id": "accidentCity",
      "label": "Municipio accidente",
      "group": "Accidente",
      "targets": [
        {
          "cell": "Y70",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.618,
        0.4938,
        0.85,
        0.5
      ]
    },
    {
      "id": "accidentZone",
      "label": "Zona accidente",
      "group": "Accidente",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "U",
          "label": "Urbana",
          "cell": "AO70",
          "box": [
            0.2556,
            0.4971,
            0.2714,
            0.5064
          ]
        },
        {
          "value": "R",
          "label": "Rural",
          "cell": "AS70",
          "box": [
            0.3012,
            0.4971,
            0.317,
            0.5064
          ]
        }
      ]
    },
    {
      "id": "place",
      "label": "Lugar accidente",
      "group": "Accidente",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "1",
          "label": "Dentro de la empresa",
          "cell": "V73",
          "box": [
            0.743,
            0.4971,
            0.7588,
            0.5064
          ]
        },
        {
          "value": "2",
          "label": "Fuera de la empresa",
          "cell": "AF73",
          "box": [
            0.931,
            0.4971,
            0.9468000000000001,
            0.5064
          ]
        }
      ]
    },
    {
      "id": "site",
      "label": "Sitio del accidente",
      "group": "Accidente",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "1",
          "label": "Almacenes o depósitos",
          "cell": "C78",
          "box": [
            0.0386,
            0.5274,
            0.0505,
            0.5344
          ]
        },
        {
          "value": "2",
          "label": "Áreas de producción",
          "cell": "C79",
          "box": [
            0.0386,
            0.5343,
            0.0505,
            0.5413
          ]
        },
        {
          "value": "3",
          "label": "Áreas recreativas",
          "cell": "C80",
          "box": [
            0.0386,
            0.5413,
            0.0505,
            0.5483
          ]
        },
        {
          "value": "4",
          "label": "Corredores o pasillos",
          "cell": "C81",
          "box": [
            0.2988,
            0.5274,
            0.31070000000000003,
            0.5344
          ]
        },
        {
          "value": "5",
          "label": "Escaleras",
          "cell": "C82",
          "box": [
            0.2988,
            0.5343,
            0.31070000000000003,
            0.5413
          ]
        },
        {
          "value": "6",
          "label": "Parqueaderos",
          "cell": "C83",
          "box": [
            0.2988,
            0.5413,
            0.31070000000000003,
            0.5483
          ]
        },
        {
          "value": "7",
          "label": "Oficinas",
          "cell": "C84",
          "box": [
            0.6571,
            0.5274,
            0.669,
            0.5344
          ]
        },
        {
          "value": "8",
          "label": "Otras áreas comunes",
          "cell": "C85",
          "box": [
            0.6571,
            0.5343,
            0.669,
            0.5413
          ]
        },
        {
          "value": "9",
          "label": "Otro",
          "cell": "C86",
          "box": [
            0.6571,
            0.5413,
            0.669,
            0.5483
          ]
        }
      ]
    },
    {
      "id": "injury",
      "label": "Tipo de lesión",
      "group": "Accidente",
      "targets": [],
      "kind": "multi",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "10",
          "label": "Fractura",
          "cell": "T78",
          "box": [
            0.0336,
            0.5701,
            0.0455,
            0.5771000000000001
          ]
        },
        {
          "value": "20",
          "label": "Luxación",
          "cell": "T79",
          "box": [
            0.0336,
            0.5771,
            0.0455,
            0.5841
          ]
        },
        {
          "value": "25",
          "label": "Torcedura, esguince o desgarro",
          "cell": "T80",
          "box": [
            0.0336,
            0.5841,
            0.0455,
            0.5911
          ]
        },
        {
          "value": "30",
          "label": "Conmoción o trauma interno",
          "cell": "T82",
          "box": [
            0.0336,
            0.5999,
            0.0455,
            0.6069
          ]
        },
        {
          "value": "40",
          "label": "Amputación",
          "cell": "T83",
          "box": [
            0.0336,
            0.6069,
            0.0455,
            0.6139
          ]
        },
        {
          "value": "41",
          "label": "Herida",
          "cell": "T84",
          "box": [
            0.3947,
            0.5701,
            0.4066,
            0.5771000000000001
          ]
        },
        {
          "value": "50",
          "label": "Trauma superficial",
          "cell": "T85",
          "box": [
            0.3947,
            0.5771,
            0.4066,
            0.5841
          ]
        },
        {
          "value": "55",
          "label": "Golpe, contusión o aplastamiento",
          "cell": "T87",
          "box": [
            0.3947,
            0.591,
            0.4066,
            0.598
          ]
        },
        {
          "value": "60",
          "label": "Quemadura",
          "cell": "T88",
          "box": [
            0.3947,
            0.598,
            0.4066,
            0.605
          ]
        },
        {
          "value": "70",
          "label": "Intoxicación o alergia",
          "cell": "AK78",
          "box": [
            0.3947,
            0.605,
            0.4066,
            0.612
          ]
        },
        {
          "value": "80",
          "label": "Efecto del tiempo o clima",
          "cell": "AK80",
          "box": [
            0.7048,
            0.5701,
            0.7167,
            0.5771000000000001
          ]
        },
        {
          "value": "81",
          "label": "Asfixia",
          "cell": "AK82",
          "box": [
            0.7061,
            0.587,
            0.718,
            0.594
          ]
        },
        {
          "value": "82",
          "label": "Efecto de electricidad",
          "cell": "AK83",
          "box": [
            0.7061,
            0.594,
            0.718,
            0.601
          ]
        },
        {
          "value": "83",
          "label": "Radiación",
          "cell": "AK84",
          "box": [
            0.7061,
            0.6018,
            0.718,
            0.6088
          ]
        },
        {
          "value": "90",
          "label": "Lesiones múltiples",
          "cell": "AK85",
          "box": [
            0.7061,
            0.6079,
            0.718,
            0.6149
          ]
        },
        {
          "value": "99",
          "label": "Otro",
          "cell": "AK86",
          "box": [
            0.7061,
            0.6149,
            0.718,
            0.6219
          ]
        }
      ]
    },
    {
      "id": "body",
      "label": "Parte del cuerpo",
      "group": "Accidente",
      "targets": [],
      "kind": "multi",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "1",
          "label": "Cabeza",
          "cell": "C92",
          "box": [
            0.0336,
            0.6506,
            0.0455,
            0.6576
          ]
        },
        {
          "value": "1.12",
          "label": "Ojo",
          "cell": "C93",
          "box": [
            0.0336,
            0.6575,
            0.0455,
            0.6645
          ]
        },
        {
          "value": "2",
          "label": "Cuello",
          "cell": "C94",
          "box": [
            0.0336,
            0.6645,
            0.0455,
            0.6715
          ]
        },
        {
          "value": "3",
          "label": "Tronco / espalda",
          "cell": "C95",
          "box": [
            0.1601,
            0.6506,
            0.172,
            0.6576
          ]
        },
        {
          "value": "3.32",
          "label": "Tórax",
          "cell": "C97",
          "box": [
            0.3897,
            0.6506,
            0.4016,
            0.6576
          ]
        },
        {
          "value": "3.33",
          "label": "Abdomen",
          "cell": "C98",
          "box": [
            0.3897,
            0.6575,
            0.4016,
            0.6645
          ]
        },
        {
          "value": "4",
          "label": "Miembros superiores",
          "cell": "C99",
          "box": [
            0.3897,
            0.6645,
            0.4016,
            0.6715
          ]
        },
        {
          "value": "4.46",
          "label": "Manos",
          "cell": "C100",
          "box": [
            0.5921,
            0.6506,
            0.604,
            0.6576
          ]
        },
        {
          "value": "5",
          "label": "Miembros inferiores",
          "cell": "C101",
          "box": [
            0.5921,
            0.6575,
            0.604,
            0.6645
          ]
        },
        {
          "value": "5.56",
          "label": "Pies",
          "cell": "C102",
          "box": [
            0.5921,
            0.6645,
            0.604,
            0.6715
          ]
        },
        {
          "value": "6",
          "label": "Ubicaciones múltiples",
          "cell": "C103",
          "box": [
            0.7908,
            0.6506,
            0.8027,
            0.6576
          ]
        },
        {
          "value": "7",
          "label": "Lesiones generales",
          "cell": "C104",
          "box": [
            0.7907,
            0.6575,
            0.8026,
            0.6645
          ]
        }
      ]
    },
    {
      "id": "agent",
      "label": "Agente del accidente",
      "group": "Accidente",
      "targets": [],
      "kind": "multi",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "1",
          "label": "Máquinas y equipos",
          "cell": "R94",
          "box": [
            0.0298,
            0.6935,
            0.0417,
            0.7005
          ]
        },
        {
          "value": "2",
          "label": "Transporte",
          "cell": "R95",
          "box": [
            0.0298,
            0.7005,
            0.0417,
            0.7075
          ]
        },
        {
          "value": "3",
          "label": "Aparatos",
          "cell": "R96",
          "box": [
            0.0298,
            0.7074,
            0.0417,
            0.7144
          ]
        },
        {
          "value": "3.36",
          "label": "Herramientas",
          "cell": "R97",
          "box": [
            0.2107,
            0.6935,
            0.2226,
            0.7005
          ]
        },
        {
          "value": "4",
          "label": "Materiales o sustancias",
          "cell": "R98",
          "box": [
            0.2107,
            0.7005,
            0.2226,
            0.7075
          ]
        },
        {
          "value": "44",
          "label": "Radiaciones",
          "cell": "R99",
          "box": [
            0.2107,
            0.7074,
            0.2226,
            0.7144
          ]
        },
        {
          "value": "5",
          "label": "Ambiente de trabajo",
          "cell": "R100",
          "box": [
            0.5152,
            0.6862,
            0.5271,
            0.6932
          ]
        },
        {
          "value": "6",
          "label": "Otros agentes",
          "cell": "R102",
          "box": [
            0.5152,
            0.7074,
            0.5271,
            0.7144
          ]
        },
        {
          "value": "6.61",
          "label": "Animales",
          "cell": "R103",
          "box": [
            0.7105,
            0.6862,
            0.7224,
            0.6932
          ]
        },
        {
          "value": "7",
          "label": "Sin datos",
          "cell": "R104",
          "box": [
            0.7105,
            0.6932,
            0.7224,
            0.7002
          ]
        }
      ]
    },
    {
      "id": "mechanism",
      "label": "Mecanismo del accidente",
      "group": "Accidente",
      "targets": [],
      "kind": "multi",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "1",
          "label": "Caída de personas",
          "cell": "AH92",
          "box": [
            0.0261,
            0.7368,
            0.038000000000000006,
            0.7438
          ]
        },
        {
          "value": "2",
          "label": "Caída de objetos",
          "cell": "AH93",
          "box": [
            0.0261,
            0.7437,
            0.038000000000000006,
            0.7507
          ]
        },
        {
          "value": "3",
          "label": "Pisadas, choques o golpes",
          "cell": "AH94",
          "box": [
            0.0261,
            0.7507,
            0.038000000000000006,
            0.7577
          ]
        },
        {
          "value": "4",
          "label": "Atrapamientos",
          "cell": "AH95",
          "box": [
            0.2381,
            0.7368,
            0.25,
            0.7438
          ]
        },
        {
          "value": "5",
          "label": "Sobreesfuerzo",
          "cell": "AH96",
          "box": [
            0.2381,
            0.7437,
            0.25,
            0.7507
          ]
        },
        {
          "value": "6",
          "label": "Temperatura extrema",
          "cell": "AH98",
          "box": [
            0.2381,
            0.7507,
            0.25,
            0.7577
          ]
        },
        {
          "value": "7",
          "label": "Electricidad",
          "cell": "AH100",
          "box": [
            0.6266,
            0.7301,
            0.6385000000000001,
            0.7371
          ]
        },
        {
          "value": "8",
          "label": "Sustancias nocivas",
          "cell": "AH101",
          "box": [
            0.6265,
            0.7368,
            0.6384,
            0.7438
          ]
        },
        {
          "value": "9",
          "label": "Otro",
          "cell": "AH103",
          "box": [
            0.6265,
            0.7507,
            0.6384,
            0.7577
          ]
        }
      ]
    },
    {
      "id": "description",
      "label": "Descripción del accidente",
      "group": "Relato y responsable",
      "targets": [
        {
          "cell": "C110",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "long",
      "page": 1,
      "required": true,
      "box": [
        0.025,
        0.791,
        0.976,
        0.819
      ]
    },
    {
      "id": "witnesses",
      "label": "¿Hubo testigos?",
      "group": "Relato y responsable",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "SI",
          "label": "Sí",
          "cell": "AL108",
          "box": [
            0.8474,
            0.8198,
            0.8632000000000001,
            0.8291
          ]
        },
        {
          "value": "NO",
          "label": "No",
          "cell": "AN108",
          "box": [
            0.9259,
            0.8198,
            0.9417,
            0.8291
          ]
        }
      ]
    },
    {
      "id": "witness1Name",
      "label": "Testigo 1: nombre",
      "group": "Relato y responsable",
      "targets": [
        {
          "cell": "W111",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.842,
        0.299,
        0.85
      ]
    },
    {
      "id": "witness1Id",
      "label": "Testigo 1: documento",
      "group": "Relato y responsable",
      "targets": [
        {
          "cell": "AL112",
          "prefix": "No: ",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.642,
        0.842,
        0.79,
        0.85
      ]
    },
    {
      "id": "witness1Job",
      "label": "Testigo 1: cargo",
      "group": "Relato y responsable",
      "targets": [
        {
          "cell": "W113",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.792,
        0.842,
        0.978,
        0.85
      ]
    },
    {
      "id": "witness2Name",
      "label": "Testigo 2: nombre",
      "group": "Relato y responsable",
      "targets": [
        {
          "cell": "W117",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.86,
        0.299,
        0.868
      ]
    },
    {
      "id": "witness2Id",
      "label": "Testigo 2: documento",
      "group": "Relato y responsable",
      "targets": [
        {
          "cell": "AL118",
          "prefix": "No: ",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.642,
        0.86,
        0.79,
        0.868
      ]
    },
    {
      "id": "witness2Job",
      "label": "Testigo 2: cargo",
      "group": "Relato y responsable",
      "targets": [
        {
          "cell": "W119",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.792,
        0.86,
        0.978,
        0.868
      ]
    },
    {
      "id": "reporter",
      "label": "Responsable del informe",
      "group": "Relato y responsable",
      "targets": [
        {
          "cell": "W125",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.025,
        0.891,
        0.299,
        0.899
      ]
    },
    {
      "id": "reporterId",
      "label": "Documento responsable",
      "group": "Relato y responsable",
      "targets": [
        {
          "cell": "AN126",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.642,
        0.891,
        0.79,
        0.899
      ]
    },
    {
      "id": "reporterJob",
      "label": "Cargo responsable",
      "group": "Relato y responsable",
      "targets": [
        {
          "cell": "W127",
          "prefix": "",
          "sheet": "FORMATO INV AT 1401"
        }
      ],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.792,
        0.891,
        0.978,
        0.899
      ]
    },
    {
      "id": "reporterIdType",
      "label": "Tipo documento responsable",
      "group": "Relato y responsable",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "CC",
          "label": "CC",
          "cell": "AM125",
          "box": [
            0.32,
            0.8843,
            0.3358,
            0.8936
          ]
        },
        {
          "value": "CE",
          "label": "CE",
          "cell": "AO125",
          "box": [
            0.358,
            0.8843,
            0.37379999999999997,
            0.8936
          ]
        },
        {
          "value": "NU",
          "label": "NU",
          "cell": "AQ125",
          "box": [
            0.3999,
            0.8843,
            0.41569999999999996,
            0.8936
          ]
        },
        {
          "value": "PA",
          "label": "PA",
          "cell": "AU125",
          "box": [
            0.4377,
            0.8843,
            0.45349999999999996,
            0.8936
          ]
        },
        {
          "value": "TI",
          "label": "TI",
          "cell": "AS125",
          "box": [
            0.4764,
            0.8843,
            0.49219999999999997,
            0.8936
          ]
        },
        {
          "value": "CD",
          "label": "CD",
          "cell": "",
          "box": [
            0.5118,
            0.8843,
            0.5276000000000001,
            0.8936
          ]
        },
        {
          "value": "SC",
          "label": "SC",
          "cell": "",
          "box": [
            0.5464,
            0.8843,
            0.5622,
            0.8936
          ]
        },
        {
          "value": "PE",
          "label": "PE",
          "cell": "",
          "box": [
            0.58,
            0.8843,
            0.5958,
            0.8936
          ]
        },
        {
          "value": "PT",
          "label": "PT",
          "cell": "",
          "box": [
            0.6162,
            0.8843,
            0.632,
            0.8936
          ]
        }
      ]
    },
    {
      "id": "reportNumber",
      "label": "Número de reporte (consulta)",
      "group": "Relato y responsable",
      "targets": [],
      "kind": "text",
      "page": 1,
      "required": false,
      "box": [
        0.73,
        0.923,
        0.98,
        0.93
      ]
    },
    {
      "id": "receivedDate",
      "label": "Fecha recepción (consulta)",
      "group": "Relato y responsable",
      "targets": [],
      "kind": "date",
      "page": 1,
      "required": false,
      "box": [
        0.775,
        0.939,
        0.977,
        0.945
      ]
    },
    {
      "id": "witness1IdType",
      "label": "Testigo 1: tipo de documento",
      "group": "Relato y responsable",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "CC",
          "label": "CC",
          "cell": "AM111",
          "box": [
            0.3184,
            0.8374,
            0.3342,
            0.8467
          ]
        },
        {
          "value": "CE",
          "label": "CE",
          "cell": "AO111",
          "box": [
            0.3557,
            0.8374,
            0.3715,
            0.8467
          ]
        },
        {
          "value": "NU",
          "label": "NU",
          "cell": "AQ111",
          "box": [
            0.3987,
            0.8374,
            0.4145,
            0.8467
          ]
        },
        {
          "value": "PA",
          "label": "PA",
          "cell": "AU111",
          "box": [
            0.4377,
            0.8374,
            0.45349999999999996,
            0.8467
          ]
        },
        {
          "value": "TI",
          "label": "TI",
          "cell": "AS111",
          "box": [
            0.4763,
            0.8374,
            0.4921,
            0.8467
          ]
        },
        {
          "value": "CD",
          "label": "CD",
          "cell": "",
          "box": [
            0.5106,
            0.8374,
            0.5264000000000001,
            0.8467
          ]
        },
        {
          "value": "SC",
          "label": "SC",
          "cell": "",
          "box": [
            0.5451,
            0.8374,
            0.5609000000000001,
            0.8467
          ]
        },
        {
          "value": "PE",
          "label": "PE",
          "cell": "",
          "box": [
            0.5795,
            0.8374,
            0.5953,
            0.8467
          ]
        },
        {
          "value": "PT",
          "label": "PT",
          "cell": "",
          "box": [
            0.614,
            0.8374,
            0.6298,
            0.8467
          ]
        }
      ]
    },
    {
      "id": "witness2IdType",
      "label": "Testigo 2: tipo de documento",
      "group": "Relato y responsable",
      "targets": [],
      "kind": "choice",
      "page": 1,
      "required": false,
      "options": [
        {
          "value": "CC",
          "label": "CC",
          "cell": "AM117",
          "box": [
            0.3187,
            0.856,
            0.33449999999999996,
            0.8653
          ]
        },
        {
          "value": "CE",
          "label": "CE",
          "cell": "AO117",
          "box": [
            0.3567,
            0.856,
            0.3725,
            0.8653
          ]
        },
        {
          "value": "NU",
          "label": "NU",
          "cell": "AQ117",
          "box": [
            0.3987,
            0.856,
            0.4145,
            0.8653
          ]
        },
        {
          "value": "PA",
          "label": "PA",
          "cell": "AU117",
          "box": [
            0.4377,
            0.856,
            0.45349999999999996,
            0.8653
          ]
        },
        {
          "value": "TI",
          "label": "TI",
          "cell": "AS117",
          "box": [
            0.4763,
            0.856,
            0.4921,
            0.8653
          ]
        },
        {
          "value": "CD",
          "label": "CD",
          "cell": "",
          "box": [
            0.5111,
            0.856,
            0.5269,
            0.8653
          ]
        },
        {
          "value": "SC",
          "label": "SC",
          "cell": "",
          "box": [
            0.5457,
            0.856,
            0.5615,
            0.8653
          ]
        },
        {
          "value": "PE",
          "label": "PE",
          "cell": "",
          "box": [
            0.58,
            0.856,
            0.5958,
            0.8653
          ]
        },
        {
          "value": "PT",
          "label": "PT",
          "cell": "",
          "box": [
            0.6162,
            0.856,
            0.632,
            0.8653
          ]
        }
      ]
    }
  ],
  "anchors": [
    {
      "text": "INFORME DE ACCIDENTES DE TRABAJO",
      "y": 0.0223
    },
    {
      "text": "INFORMACION SOBRE EL ACCIDENTE",
      "y": 0.405
    },
    {
      "text": "DESCRIPCIÓN DETALLADA DEL ACCIDENTE",
      "y": 0.7878
    }
  ]
};
