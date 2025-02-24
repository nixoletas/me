"use strict";(self.webpackChunknixoletas_blog=self.webpackChunknixoletas_blog||[]).push([[224],{9594:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"projects/entrance-exit","title":"Controle de entrada e sa\xedda escaneando QR Code","description":"Esse app permite escanear um QR Code registrando a entrada ou sa\xedda por meio de requisi\xe7\xe3o \xe0 um servidor PHP","source":"@site/i18n/pt-br/docusaurus-plugin-content-docs/current/projects/entrance-exit.md","sourceDirName":"projects","slug":"/projects/entrance-exit","permalink":"/me/pt-br/portfolio/projects/entrance-exit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Controle de entrada e sa\xedda escaneando QR Code","description":"Esse app permite escanear um QR Code registrando a entrada ou sa\xedda por meio de requisi\xe7\xe3o \xe0 um servidor PHP"},"sidebar":"tutorialSidebar","previous":{"title":"Lista de compras","permalink":"/me/pt-br/portfolio/projects/shopping"},"next":{"title":"Fam Security Landing Page","permalink":"/me/pt-br/portfolio/projects/famsecurity"}}');var o=n(4848),a=n(8453),s=n(3652),i=(n(9702),n(63)),c=n(3423);const l={title:"Controle de entrada e sa\xedda escaneando QR Code",description:"Esse app permite escanear um QR Code registrando a entrada ou sa\xedda por meio de requisi\xe7\xe3o \xe0 um servidor PHP"},d=void 0,p={},u=[];function m(e){const r={br:"br",code:"code",h1:"h1",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,o.jsx)(i.v,{docLink:"https://reactnative.dev/",children:"React Native"}),(0,o.jsx)(i.v,{docLink:"https://docs.expo.dev/",children:"Expo Framework"})]}),"\n",(0,o.jsx)(s.M,{codeLink:"https://github.com/nixoletas/entrada-react"}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"entrada",src:n(2992).A+"",width:"1280",height:"832"})}),"\n",(0,o.jsx)(r.h1,{id:"about-the-project",children:"About the project"}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsxs)(c.F,{children:[(0,o.jsxs)(r.p,{children:["Este \xe9 um projeto simples, mas real, usado em meu batalh\xe3o para registro de entrada e sa\xedda de pessoas e ve\xedculos.",(0,o.jsx)(r.br,{}),"\n","Os c\xf3digos QR s\xe3o gerados por um software diferente."]}),(0,o.jsx)(r.p,{children:"Este aplicativo permite simplesmente escanear o c\xf3digo QR, disparando uma requisi\xe7\xe3o GET para um servidor PHP que realizar\xe1 o registro no banco de dados."}),(0,o.jsx)(r.p,{children:"O arquivo principal \xe9:"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsx",children:"import { CameraView, useCameraPermissions } from 'expo-camera';\r\nimport React, { useState } from 'react';\r\nimport { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';\r\n\r\nexport default function HomeScreen() {\r\n  const [permission, requestPermission] = useCameraPermissions();\r\n  const [messageVisible, setMessageVisible] = useState(false);\r\n  const [movimentacao, setMovimentacao] = useState('entrada');\r\n  const [crachaID, setCrachaID] = useState('');\r\n  const [requestOptions, setRequestOptions] = useState({\r\n    ID: '',\r\n    tipo: '',\r\n    status: '',\r\n  });\r\n\r\n  if (!permission) {\r\n    // Camera permissions are still loading.\r\n    return <View />;\r\n  }\r\n\r\n  if (!permission.granted) {\r\n    // Camera permissions are not granted yet.\r\n    return (\r\n      <View style={styles.container}>\r\n        <Text style={styles.message}>Precisamos de sua permiss\xe3o para usar a c\xe2mera</Text>\r\n        <Button onPress={requestPermission} title=\"Conceder permiss\xe3o\" />\r\n      </View>\r\n    );\r\n  }\r\n\r\n  const confirmarEntrada = (data: any) => {\r\n    if (crachaID != data.data) {\r\n      const cracha = `http://sistemas.9bcomge.eb.mil.br/crachas/cracha2.php?id=${data.data}`;\r\n      let tipo = '';\r\n      setCrachaID(data.data);\r\n\r\n      fetch(cracha)\r\n        .then(response => response.json())\r\n        .then(result => {\r\n          tipo = result;\r\n          setMessageVisible(true);\r\n        })\r\n        .then(() => {\r\n          const url = `http://sistemas.9bcomge.eb.mil.br/crachas/cracha.php?movimentacao=${data.data}&tipo=${tipo}&status=${movimentacao}&destino=&obs=`;\r\n          setRequestOptions({\r\n            ID: data.data,\r\n            tipo: tipo,\r\n            status: movimentacao,\r\n          });\r\n          fetch(url)\r\n          .then(response => response.status)\r\n          .then(result => {\r\n            console.log(url);\r\n            console.log(requestOptions);\r\n            setMessageVisible(true);\r\n          })\r\n          .catch(error => {\r\n            console.error('Erro na requisi\xe7\xe3o:', error);\r\n          });\r\n        });\r\n    }\r\n  };\r\n\r\n  return (\r\n    <View style={styles.container}>\r\n      <CameraView\r\n        style={styles.camera}\r\n        facing='back'\r\n        barcodeScannerSettings={{ barcodeTypes: [\"qr\"] }}\r\n        onBarcodeScanned={(data) => {\r\n          confirmarEntrada(data);\r\n        }}\r\n      >\r\n        <View style={styles.buttonContainer}>\r\n          <Text style={styles.text}>{movimentacao.toString().toUpperCase()}</Text>\r\n        </View>\r\n      </CameraView>\r\n      {messageVisible && (\r\n        <View style={styles.confirmationMessage}>\r\n          <Text style={styles.confirmationText}>{movimentacao.toString().toLocaleUpperCase()} confirmada! \u2705</Text>\r\n          <Text style={styles.divider}></Text>\r\n          <Text style={styles.confirmationText}>Status: {requestOptions.status}</Text>\r\n          <Text style={styles.confirmationText}>Tipo: {requestOptions.tipo}</Text>\r\n          <Text style={styles.confirmationText}>ID do crach\xe1: {requestOptions.ID}</Text>\r\n          <TouchableOpacity style={styles.closeButton} onPress={() => {\r\n            setMessageVisible(false);\r\n            setCrachaID('');\r\n            setRequestOptions({ ID: '', tipo: '', status: '' });\r\n          }}>\r\n            <Text style={styles.closeButtonText}>Fechar</Text>\r\n          </TouchableOpacity>\r\n        </View>\r\n      )}\r\n      <View style={styles.typeMessage}>\r\n        {movimentacao === 'entrada' ? (\r\n          <TouchableOpacity style={styles.entradaButton} onPress={() => {\r\n            movimentacao === 'entrada' ? setMovimentacao('saida') : setMovimentacao('entrada');\r\n            setMessageVisible(false);\r\n            setCrachaID('');\r\n          }}>\r\n            <Text style={styles.closeButtonText}>{movimentacao.toString().toUpperCase()}</Text>\r\n          </TouchableOpacity>\r\n        ) : (\r\n          <TouchableOpacity style={styles.saidaButton} onPress={() => {\r\n            movimentacao === 'entrada' ? setMovimentacao('saida') : setMovimentacao('entrada');\r\n            setMessageVisible(false);\r\n            setCrachaID('');\r\n          }}>\r\n            <Text style={styles.closeButtonText}>{movimentacao.toString().toUpperCase()}</Text>\r\n          </TouchableOpacity>\r\n        )}\r\n      </View>\r\n    </View>\r\n  );\r\n}\r\n\r\nconst styles = StyleSheet.create({\r\n  container: {\r\n    flex: 1,\r\n    justifyContent: 'center',\r\n  },\r\n  message: {\r\n    textAlign: 'center',\r\n    paddingBottom: 10,\r\n  },\r\n  camera: {\r\n    flex: 1,\r\n  },\r\n  buttonContainer: {\r\n    justifyContent: 'center',\r\n    flex: 1,\r\n    flexDirection: 'row',\r\n    backgroundColor: 'transparent',\r\n    margin: 64,\r\n  },\r\n  button: {\r\n    flex: 1,\r\n    alignSelf: 'flex-end',\r\n    alignItems: 'center',\r\n  },\r\n  text: {\r\n    fontSize: 16,\r\n    fontWeight: 'bold',\r\n    color: 'white',\r\n  },\r\n  typeMessage: {\r\n    position: 'absolute',\r\n    bottom: 24,\r\n    left: '20%',\r\n    right: '20%',\r\n    padding: 20,\r\n    backgroundColor: 'rgba(0, 0, 0, 0.5)',\r\n    borderRadius: 8,\r\n  },\r\n  confirmationMessage: {\r\n    position: 'absolute',\r\n    left: '15%',\r\n    right: '15%',\r\n    backgroundColor: 'rgba(0, 0, 0, 0.7)',\r\n    borderRadius: 8,\r\n  },\r\n  confirmationText: {\r\n    color: 'white',\r\n    fontSize: 16,\r\n    textAlign: 'center',\r\n  },\r\n  divider: {\r\n    height: 1,\r\n    backgroundColor: 'white',\r\n    marginVertical: 10,\r\n  },\r\n\r\n  closeButton: {\r\n    marginTop: 10,\r\n    padding: 15,\r\n    //background white\r\n    backgroundColor: '#3545A7',\r\n    borderRadius: 5,\r\n  },\r\n  closeButtonText: {\r\n    color: 'white',\r\n    fontWeight: 'bold',\r\n    textAlign: 'center',\r\n  },\r\n  entradaButton: {\r\n    marginTop: 15,\r\n    padding: 30,\r\n    backgroundColor: '#008000',\r\n    borderRadius: 5,\r\n  },\r\n  saidaButton: {\r\n    marginTop: 15,\r\n    padding: 30,\r\n    backgroundColor: '#CC0000',\r\n    borderRadius: 5,\r\n  },\r\n});\n"})}),(0,o.jsx)(r.h1,{id:"tecnologias",children:"Tecnologias"}),(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"React Native"}),"\n",(0,o.jsx)(r.li,{children:"Expo Framework"}),"\n",(0,o.jsx)(r.li,{children:"Metabase"}),"\n"]})]})]})}function g(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},3652:(e,r,n)=>{n.d(r,{M:()=>s});n(6540);var t=n(3914),o=n(6188),a=n(4848);const s=e=>{let{codeLink:r}=e;return(0,a.jsxs)("a",{style:{textDecoration:"underline",color:"var(--ifm-color-primary)",transition:"background 0.3s, color 0.3s"},href:r,target:"_blank",rel:"noopener noreferrer",onMouseOver:e=>{e.currentTarget.style.color="var(--ifm-color-primary-lighter)"},onMouseOut:e=>{e.currentTarget.style.color="var(--ifm-color-primary)"},children:["Code ",(0,a.jsx)(t.g,{icon:o.jTw,width:15})]})}},9702:(e,r,n)=>{n.d(r,{s:()=>s});n(6540);var t=n(3914),o=n(6188),a=n(4848);const s=e=>{let{liveLink:r}=e;return(0,a.jsxs)("a",{style:{textDecoration:"underline",color:"var(--ifm-color-primary)",transition:"background 0.3s, color 0.3s"},href:r,target:"_blank",rel:"noopener noreferrer",onMouseOver:e=>{e.currentTarget.style.color="var(--ifm-color-primary-lighter)"},onMouseOut:e=>{e.currentTarget.style.color="var(--ifm-color-primary)"},children:["Live ",(0,a.jsx)(t.g,{icon:o._vK,width:15})]})}},3423:(e,r,n)=>{n.d(r,{F:()=>o});n(6540);var t=n(4848);const o=e=>{let{children:r}=e;return(0,t.jsx)("p",{style:{textAlign:"justify"},children:r})}},63:(e,r,n)=>{n.d(r,{v:()=>o});var t=n(4848);const o=e=>{let{children:r,docLink:n}=e;return(0,t.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:"var(--ifm-color-primary)",color:"white",borderRadius:"8px",padding:"0.4rem",fontSize:"1rem",marginRight:"0.4rem"},children:r})}},2992:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/entrada-saida-3db6090ffde5b7c9ebf9c28310c2f68e.png"},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(6540);const o={},a=t.createContext(o);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);