//import { useI18n } from "vue-i18n";
import _ from "lodash";
export function Test(empresa) {
  //const { t } = useI18n();

  let camposPrincipalesConfig = [
    { campo: "cal", tipo: "Calendar", label: "Prueba Calendario" },
    { campo: "text", tipo: "InputText", label: "Prueba texto" },
    { campo: "list", tipo: "lista", label: "Prueba Lista", lista: "testList" },
    { campo: "check", tipo: "checkbox", label: "Prueba checkbox" },
    {campo: "category", tipo: "InputText", label: "Category" },
    {campo: "name", tipo: "InputText", label: "Name" },
    {campo: "code", tipo: "InputText", label: "Code" },
    {campo: "quantity", tipo: "InputText", label: "Quantity" },

  ];
  let camposTablaConfig = [
    { campo: "cal", tipo: "Calendar", label: "Prueba Calendario" },
    { campo: "text", tipo: "InputText", label: "Prueba texto" },
    { campo: "list", tipo: "lista", label: "Prueba Lista", lista: "testList" },
    { campo: "check", tipo: "checkbox", label: "Prueba checkbox" },


  ];

  let sysfinance = {
    camposPrincipales: [
      "category",
      "name",
      "code",
      "quantity",
      // "cal",
      // "text",
      // "list",
      // "check",
    ],
    camposTabla: [ "fecha"],
  };

  let gylfitaly = {
    camposPrincipales: [
      "NombreSociedad",
    ],
    camposTabla: ["NombreSociedad"],
  };

  let camposPrincipales = [];
  let camposTabla = [];

  if (empresa == "sys") {
    camposPrincipales = _.filter(camposPrincipalesConfig, function (o) {
      return _.includes(sysfinance.camposPrincipales, o.campo);
    });
    camposTabla = _.filter(camposTablaConfig, function (o) {
      return _.includes(sysfinance.camposTabla, o.campo);
    });
    return {
      camposPrincipales,
      camposTabla,
    };
  }

  if (empresa == "gylfitaly") {
    camposPrincipales = _.filter(camposPrincipalesConfig, function (o) {
      return _.includes(gylfitaly.camposPrincipales, o.campo);
    });
    camposTabla = _.filter(camposTablaConfig, function (o) {
      return _.includes(gylfitaly.camposTabla, o.campo);
    });

    return {
      camposPrincipales,
      camposTabla,
    };
  }

  return {
    camposPrincipales: camposPrincipalesConfig,
    camposTabla: camposTablaConfig,
  };
}
