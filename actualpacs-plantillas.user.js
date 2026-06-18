// ==UserScript==
// @name         Autoplantillas ActualPacs
// @namespace    samonlineott-actualpacs
// @version      3.2.2
// @description  Inserta plantillas automáticas oficiales en ventana de informe ActualPacs
// @match        https://magali.actualpacs.com/actualpacs/report/create*
// @match        http://magali.actualpacs.com/actualpacs/report/create*
// @run-at       document-end
// @grant        none
// @updateURL    https://raw.githubusercontent.com/telemedicinaclinicamch/actualpacs-plantillas/main/actualpacs-plantillas.user.js
// @downloadURL  https://raw.githubusercontent.com/telemedicinaclinicamch/actualpacs-plantillas/main/actualpacs-plantillas.user.js
// ==/UserScript==

(function() {
    'use strict';

    const PLANTILLAS = [
        {
                "nombre": "TAC ABDOMEN SIMPLE",
                "alias": [
                        "ABDOMEN SIMPLE(ADULTO)",
                        "TC ABDOMEN SIMPLE",
                        "ABDOMEN^ABDOMEN_SIMPLE (ADULT)",
                        "ABDOMEN SIMPLE"
                ],
                "plantilla": "NOTA PARA MEDICO: VERIFICAR EL TÍTULO Y QUE EN LA DESCRIPCIÓN DEL ESTUDIO SI ES SIMPLE\nTC ABDOMEN TOTAL SIMPLE\nInformación clínica:\nTÉCNICA:\nSe practicó adquisición volumétrica de abdomen, con reconstrucciones multiplanares previa administración de contraste oral.\nHALLAZGOS:\nHígado: De   tamaño, contornos    y    densidad    normales, sin evidencia    de lesiones   focales.  No hay evidencia de dilatación   de la    vía     biliar     intra o   extrahepática.\nPáncreas: De tamaño, contornos y densidad normales, sin evidencia de alteraciones de los planos peripancreaticos.\nBazo: De tamaño, contornos y densidad normales.\nAdrenales: De tamaño y configuración habituales.\nRiñones: De tamaño, contornos y densidad normales.\nEstructuras vasculares del retroperitoneo  dentro de lo normal.\nEl estómago, intestino delgado y grueso no muestran alteraciones evidentes.\nVejiga sin alteraciones intrínsecas o extrínsecas a la misma.\nCONCLUSIÓN:\nTac abdomen simple sin alteraciones."
        },
        {
                "nombre": "TAC ABDOMEN CONTRASTE",
                "alias": [
                        "ABDOMEN CONTRASTADO",
                        "TC ABDOMEN CONTRASTADO",
                        "TAC ABDOMEN CONTRASTE",
                        "ABDOMEN CONTRASTE"
                ],
                "plantilla": "NOTA PARA MEDICO: VERIFICAR EL TÍTULO Y QUE EN LA DESCRIPCIÓN DEL ESTUDIO SI ES SIMPLE O SIMPLE Y CON CONTRASTE O 3D\nTC ABDOMEN CONTRASTADO\nInformacion Clínica:\nTÉCNICA:\nSe practicó adquisición volumétrica de abdomen, con reconstrucciones multiplanares previa administración de contraste oral e intravenoso.\nHALLAZGOS:\nHígado: De   tamaño, contornos    y    densidad    normales, sin evidencia    de lesiones   focales.  No hay evidencia de dilatación   de la    vía     biliar     intra o   extrahepática.   Patrón vascular intrahepático dentro de lo normal. Vena porta sin alteraciones.\nPáncreas: De tamaño, contornos y densidad normales, sin evidencia de alteraciones de los planos peripancreaticos.\nBazo: De tamaño, contornos y densidad normales.\nAdrenales: De tamaño y configuración habituales.\nRiñones: De tamaño, contornos y densidad normales.\nEstructuras vasculares del retroperitoneo  dentro de lo normal.\nEl estómago, intestino delgado y grueso no muestran alteraciones evidentes.\nVejiga sin alteraciones intrínsecas o extrínsecas a la misma.\nNo hay realces anormales del medio de contraste.\nCONCLUSIÓN:\nTAC DE ABDOMEN TOTAL CON CONTRASTE DENTRO DE LÍMITES DE LO NORMAL."
        },
        {
                "nombre": "TAC ABDOMEN SYC",
                "alias": [
                        "ABDOMEN SYC",
                        "ABDOMEN SIMPLE Y CONTRASTE",
                        "ABDOMEN SIMPLE Y CONTRASTADO",
                        "ABDOMEN^ABDOMEN_SYC (ADULT)"
                ],
                "plantilla": "NOTA PARA MEDICO: VERIFICAR EL TÍTULO Y QUE EN LA DESCRIPCIÓN DEL ESTUDIO SI ES SIMPLE O SIMPLE Y CON CONTRASTE O 3D\nTC ABDOMEN SIMPLE Y  CONTRASTADO\nInformacion Clínica:\nTÉCNICA:\nSe practicó adquisición volumétrica de abdomen, con reconstrucciones multiplanares antes y despúes de la administración de contraste oral e intravenoso.\nHALLAZGOS:\nHígado: De   tamaño, contornos    y    densidad    normales, sin evidencia    de lesiones   focales.  No hay evidencia de dilatación   de la    vía     biliar     intra o   extrahepática.   Patrón vascular intrahepático dentro de lo normal. Vena porta sin alteraciones.\nPáncreas: De tamaño, contornos y densidad normales, sin evidencia de alteraciones de los planos peripancreaticos.\nBazo: De tamaño, contornos y densidad normales.\nAdrenales: De tamaño y configuración habituales.\nRiñones: De tamaño, contornos y densidad normales.\nEstructuras vasculares del retroperitoneo  dentro de lo normal.\nEl estómago, intestino delgado y grueso no muestran alteraciones evidentes.\nVejiga sin alteraciones intrínsecas o extrínsecas a la misma.\nNo hay realces anormales del medio de contraste.\nCONCLUSIÓN:\nTAC DE ABDOMEN TOTAL CON CONTRASTE DENTRO DE LÍMITES DE LO NORMAL."
        },
        {
                "nombre": "UROTAC SIMPLE",
                "alias": [
                        "UROTAC SIMPLE",
                        "UROTC SIMPLE",
                        "ABDOMEN^UROTAC_SIMPLE (ADULT)",
                        "E+1 UROTAC SIMPLE",
                        "UROTAC",
                        "UROTAC(ADULTO)",
                        "UROTAC GC(ADULTO)"
                ],
                "plantilla": "TAC UROTAC SIMPLE\nDATOS CLÍNICOS:\nTÉCNICA:\nSe realiza estudio con equipo multicorte de la via urinaria con posterior reconstrucción de cada sistema excretor.\nHALLAZGOS:\nHígado de tamaño y morfología normal.\nNo se observa dilatación de la vía biliar.\nBazo homogéneo de tamaño normal.\nÁrea pancreática y suprarrenales sin alteraciones significativas.\nRiñones de tamaño y morfología normal. Buen grosor cortical. No se identifican litiasis en los grupos caliciales ni en los trayectos ureterales los cuales son de calibre normal.\nVejiga sin alteraciones.\nNo se observan adenopatías retroperitoneales o pélvicas de tamaño significativo.\nEstructuras de la pelvis sin otras alteraciones valorables.\nCONCLUSIÓN:\nExamen urotac sin alteraciones relevantes."
        },
        {
                "nombre": "UROTAC CONTRASTADO",
                "alias": [
                        "UROTAC CONTRASTADO"
                ],
                "plantilla": "UROTAC CONTRASTADO\nTÉCNICA:\nSe realiza estudio con equipo multicorte de la via urinaria con posterior reconstrucción  de cada sistema excretor en fase después de administrar contraste endovenoso en fase arterial, venosa y tardía .\nHALLAZGOS:\nHígado de tamaño y morfología normal.\nNo se observa dilatación de la vía biliar.\nBazo homogéneo de tamaño normal.\nÁrea pancreática y suprarrenales sin alteraciones significativas.\nRiñones de tamaño y morfología normal. Buen grosor  cortical. No se identifican litiasis  en los grupos caliciales ni en los trayectos ureterales  los cuales son de calibre normal. Después de administrar contraste endovenoso se aprecia una fase nefrográfica simétrica. Hay eliminación de contraste de forma simultánea.\nVejiga  sin alteraciones.\nNo se observan adenopatías retroperitoneales o pélvicas de tamaño significativo.\nEstructuras de la pelvis sin otras alteraciones valorables.\nCONCLUSIÓN:\nExamen urotac sin alteraciones relevantes."
        },
        {
                "nombre": "UROTAC SYC",
                "alias": [
                        "UROTAC SYC"
                ],
                "plantilla": "UROTAC SIMPLE Y CON  CONTRASTE ENDOVENOSO\nTÉCNICA:\nSe realiza estudio con equipo multicorte de la via urinaria con posterior reconstrucción  de cada sistema excretor en fase simple y después de administrar contraste endovenoso en fase arterial, venosa y tardía .\nHALLAZGOS:\nHígado de tamaño y morfología normal.\nNo se observa dilatación de la vía biliar.\nBazo homogéneo de tamaño normal.\nÁrea pancreática y suprarrenales sin alteraciones significativas.\nRiñones de tamaño y morfología normal. Buen grosor  cortical. No se identifican litiasis  en los grupos caliciales ni en los trayectos ureterales  los cuales son de calibre normal. Después de administrar contraste endovenoso se aprecia una fase nefrográfica simétrica. Hay eliminación de contraste de forma simultánea.\nVejiga  sin alteraciones.\nNo se observan adenopatías retroperitoneales o pélvicas de tamaño significativo.\nEstructuras de la pelvis sin otras alteraciones valorables.\nCONCLUSIÓN:\nExamen urotac sin alteraciones relevantes."
        },
        {
                "nombre": "TAC TORAX SIMPLE",
                "alias": [
                        "TORAX SIMPLE TCH(ADULTO)",
                        "TC DE TORAX SIMPLE",
                        "TORAX SIMPLE",
                        "TORAX SIMPLE",
                        "TORAX OBESO(ADULTO)",
                        "TORAX^TORAX_SIMPLE (ADULT)",
                        "TAC DE TORAX SIMPLE"
                ],
                "plantilla": "TAC DE TORAX SIMPLE\nInformación clínica:\nInformación técnica: Se tomaron cortes axiales secuenciales finos de alta resolución, de 1.5 mm de espesor y reconstrucciones en planos coronal y sagital.\nHallazgos:\nParénquima pulmonar y pleura:\nNo hay evidencia de derrames  pleurales o lesiones de tipo intra o extrapleural.\nNo se observan  nódulos, masas  o infiltrados en los diferentes lóbulos  pulmonares,  así como tampoco bronquiectasias.No  se  aprecian atelectasias.\nLa traquea, los bronquios fuente  y lobares visualizados están dentro de  lo normal.\nMediastino: No\thay  evidencia\tde\tmasas\tmediastinales, linfadenopatia  hiliar o mediastinal.\nCavidades cardiacas,  grandes vasos  y  demás estructuras vasculares visualizadas  no  muestran cambio de significado patológico importante.\nOtros:  Los tejidos blandos y estructuras óseas de las paredes del  tórax no muestran alteraciones.\nCONCLUSIÓN: TAC DE TORAX SIMPLE DENTRO DE LO NORMAL.."
        },
        {
                "nombre": "TAC TORAX CONTRASTADO",
                "alias": [
                        "TORAX CONTRASTADO",
                        "TC DE TORAX CONTRASTADO",
                        "TAC DE TORAX CONTRASTE",
                        "TORAX CONTRASTE",
                        "TORAX^TORAX_CONTRASTE (ADULT)",
                        "TORAX CTE(ADULTO)",
                        "TC DE TORAX CC",
                        "TAC TORAX CONTRASTADO",
                        "THORAX^TORAX_CTE (ADULT)"
                ],
                "plantilla": "TAC  DE TORAX  CON CONTRASTE  ENDOVENOSO\nDATOS CLÍNICOS:\nTÉCNICA:\nSe  realiza  estudio tomografíco  de  tórax con contraste endovenoso desde ápex hasta base diafragmáticas. Se ha reconstruido en el plano coronal y sagital con ventana de mediastino y de pulmón.\nHallazgos:\nParénquima pulmonar y pleura:\nNo hay evidencia de derrames  pleurales o lesiones de tipo intra o extrapleural. No se observan  nódulos, masas  o infiltrados en los diferentes lóbulos  pulmonares,  así como tampoco bronquiectasias.No  se  aprecian atelectasias.\nLa traquea, los bronquios fuente  y lobares visualizados están dentro de  lo normal.\nMediastino: No\thay  evidencia\tde\tmasas\tmediastinales, linfadenopatia  hiliar o mediastinal.\nCavidades cardiacas,  grandes vasos  y  demás estructuras vasculares visualizadas  no  muestran cambio de significado patológico importante.\nOtros:  Los tejidos blandos y estructuras óseas de las paredes del  tórax no muestran alteraciones.\nDespués de administrar contraste ev no hay captaciones patologicas.\nIMPRESION: TAC DE TORAX CON CONTRASTE DENTRO DE LO NORMAL."
        },
        {
                "nombre": "TAC TORAX SYC",
                "alias": [
                        "TORAX S Y C(ADULTO)",
                        "CT TORAX SIMP Y CTE",
                        "TORAX SYC",
                        "TORAX SIMPLE Y CONTRASTE",
                        "TORAX SIMPLE Y CONTRASTADO"
                ],
                "plantilla": "TAC  DE TORAX  SIMPLE Y CON CONTRASTE  ENDOVENOSO\nDATOS CLÍNICOS:\nTÉCNICA:\nSe  realiza  estudio tomografíco  de  tórax simple y con contraste endovenoso desde ápex hasta base diafragmáticas. Se ha reconstruido en el plano coronal y sagital con ventana de mediastino y de pulmón.\nHallazgos:\nParénquima pulmonar y pleura:\nNo hay evidencia de derrames  pleurales o lesiones de tipo intra o extrapleural.\nNo se observan  nódulos, masas  o infiltrados en los diferentes lóbulos  pulmonares,  así como tampoco bronquiectasias.No  se  aprecian atelectasias.\nLa traquea, los bronquios fuente  y lobares visualizados están dentro de  lo normal.\nMediastino: No\thay  evidencia\tde\tmasas\tmediastinales, linfadenopatia  hiliar o mediastinal.\nCavidades cardiacas,  grandes vasos  y  demás estructuras vasculares visualizadas  no  muestran cambio de significado patológico importante.\nOtros:  Los tejidos blandos y estructuras óseas de las paredes del  tórax no muestran alteraciones.\nDespues de administrar contraste ev no hay captaciones patologicas.\nIMPRESION: TAC DE TORAX SIMPLE Y CON CONTRASTE DENTRO DE LO NORMAL."
        },
        {
                "nombre": "TAC CRANEO SIMPLE",
                "alias": [
                        "CRANEO SIMPLE(ADULTO)",
                        "TC DE CRANEO SIMPLE",
                        "CRANEO^CRANEO_SIMPLE (ADULT)",
                        "TAC DE CRANEO SIMPLE",
                        "CRANEO SIMPLE",
                        "TC CRANEO SIMPLE"
                ],
                "plantilla": "TAC CRANEO SIMPLE\nInformación clínica:\nTÉCNICA:\nSe realiza tomografía de cerebro en el plano axial sin contraste endovenoso realizando reconstrucciones multiplanares.\nHALLAZGOS:\nSe observa parénquima cerebral homogéneo con buena definición de las sustancias blanca y gris. No hay cambios inflamatorios ni tumorales. No se visualizan cambios isquémicos ni colecciones hemorrágicas.\nEl tamaño y la posición de los ventrículos supra e infratentoriales son normales, sin signos de obstrucción ni efecto masa.\nLa línea media está en posición central.\nEstructuras de la fosa posterior, tallo cerebral, hemisferios cerebelosos y vermis sin datos patológicos.\nLa convexidad cerebral está libre sin masas ni colecciones. Las estructuras óseas no muestran alteraciones.\nOPINIÓN:\n-Estudio dentro de límites normales."
        },
        {
                "nombre": "TAC CRANEO CONTRASTADO",
                "alias": [
                        "CRANEO CONTRASTADO",
                        "TC DE CRANEO CONTRASTADO",
                        "CRANEO CONTRASTE",
                        "CRANEO^CRANEO_CONTRASTE (ADULT)",
                        "TAC DE CRANEO CONTRASTE"
                ],
                "plantilla": "TAC CRANEO CONTRASTADO\nInformación clínica:\nTÉCNICA:\nSe realiza tomografía de cerebro en el plano axial con contraste endovenoso realizando reconstrucciones multiplanares.\nHALLAZGOS:\nSe observa parénquima cerebral homogéneo con buena definición de las sustancias blanca y gris. No hay cambios inflamatorios ni tumorales. No se visualizan cambios isquémicos ni colecciones hemorrágicas.\nEl tamaño y la posición de los ventrículos supra e infratentoriales son normales, sin signos de obstrucción ni efecto masa.\nLa línea media está en posición central.\nEstructuras de la fosa posterior, tallo cerebral, hemisferios cerebelosos y vermis sin datos patológicos.\nLa convexidad cerebral está libre sin masas ni colecciones. Las estructuras óseas no muestran alteraciones.\nOPINIÓN:\n-Estudio dentro de límites normales."
        },
        {
                "nombre": "TAC CRANEO SYC",
                "alias": [
                        "CRANEO SYC",
                        "CRANEO SIMPLE Y CONTRASTE",
                        "CRANEO SIMPLE Y CONTRASTADO"
                ],
                "plantilla": "TAC CRANEO SIMPLE\nInformación clínica:\nTÉCNICA:\nSe realiza tomografía de cerebro en el plano axial simple y con contraste endovenoso realizando reconstrucciones multiplanares.\nHALLAZGOS:\nSe observa parénquima cerebral homogéneo con buena definición de las sustancias blanca y gris. No hay cambios inflamatorios ni tumorales. No se visualizan cambios isquémicos ni colecciones hemorrágicas.\nEl tamaño y la posición de los ventrículos supra e infratentoriales son normales, sin signos de obstrucción ni efecto masa.\nLa línea media está en posición central.\nEstructuras de la fosa posterior, tallo cerebral, hemisferios cerebelosos y vermis sin datos patológicos.\nLa convexidad cerebral está libre sin masas ni colecciones. Las estructuras óseas no muestran alteraciones.\nOPINIÓN:\n-Estudio dentro de límites normales."
        },
        {
                "nombre": "TAC SPN SIMPLE",
                "alias": [
                        "SPN SIMPLE",
                        "SPN SIMPLE(ADULTO)",
                        "TC DE SPN SIMPLE",
                        "SENOS PARANASALES SIMPLE",
                        "SENOS PARANASALES(ADULTO)",
                        "SPN^SPN_SIMPLE (ADULT)",
                        "TAC DE SPN SIMPLE"
                ],
                "plantilla": "TAC DE SENOS PARANASALES SIMPLE\nInformación clínica:\nTÉCNICA:\nSe realiza tomografía de cara y senos paranasales con equipo multicorte en el plano axial con ventana ósea, sin contraste endovenoso, realizando reconstrucciones multiplanares y reconstrucción 3D.\nHALLAZGOS:\nSenos frontales, maxilares, esfenoidales y celdillas etmoidales correctamente neumatizados.\nComplejos ostiomeatales y canales de drenaje sinunasales permeables.\nLas fosas nasales se encuentran normoaireadas.\nSeptum nasal centrado.\nNo se reconocen alteraciones estructurales o traumáticas óseas.\nCavum faríngeo libre.\nOPINIÓN:\n-ESTUDIO DENTRO DE LÍMITES NORMALES."
        },
        {
                "nombre": "TAC SPN CONTRASTADO",
                "alias": [
                        "SPN CONTRASTADO",
                        "TC DE SPN CONTRASTADO",
                        "SPN CONTRASTE",
                        "SPN^SPN_CONTRASTE (ADULT)",
                        "TAC DE SPN CONTRASTE"
                ],
                "plantilla": "TAC DE SENOS PARANASALES CTE\nInformación clínica:\nTÉCNICA:\nSe realiza tomografía de cara y senos paranasales con equipo multicorte en el plano axial con ventana ósea, con contraste endovenoso, realizando reconstrucciones multiplanares y reconstrucción 3D.\nHALLAZGOS:\nSenos frontales, maxilares, esfenoidales y celdillas etmoidales correctamente neumatizados.\nComplejos ostiomeatales y canales de drenaje sinunasales permeables.\nLas fosas nasales se encuentran normoaireadas.\nSeptum nasal centrado.\nNo se reconocen alteraciones estructurales o traumáticas óseas.\nCavum faríngeo libre.\nOPINIÓN:\n-ESTUDIO DENTRO DE LÍMITES NORMALES."
        },
        {
                "nombre": "TAC SPN SYC",
                "alias": [
                        "SPN SYC",
                        "SPN SIMPLE Y CONTRASTE",
                        "SPN SIMPLE Y CONTRASTADO"
                ],
                "plantilla": "TAC DE SENOS PARANASALES SIMPLE Y CTE\nInformación clínica:\nTÉCNICA:\nSe realiza tomografía de cara y senos paranasales con equipo multicorte en el plano axial con ventana ósea, simple y con contraste endovenoso, realizando reconstrucciones multiplanares y reconstrucción 3D.\nHALLAZGOS:\nSenos frontales, maxilares, esfenoidales y celdillas etmoidales correctamente neumatizados.\nComplejos ostiomeatales y canales de drenaje sinunasales permeables.\nLas fosas nasales se encuentran normoaireadas.\nSeptum nasal centrado.\nNo se reconocen alteraciones estructurales o traumáticas óseas.\nCavum faríngeo libre.\nOPINIÓN:\n-ESTUDIO DENTRO DE LÍMITES NORMALES."
        },
        {
                "nombre": "TAC CUELLO SIMPLE",
                "alias": [
                        "CUELLO(ADULTO)",
                        "NECK^NECK (ADULT)",
                        "TAC DE CUELLO",
                        "TAC CUELLO"
                ],
                "plantilla": "TC DE CUELLO SIMPLE\nInformación clínica:\nTÉCNICA:\nSe ha efectuado una tomografía computada del cuello, en el plano axial, sin contraste endovenoso, realizando reconstrucciones multiplanares.\nHALLAZGOS:\nNo se reconocen adenomegalias ni masas cervicales.\nMúsculos esternocleidomastoideo, masticadores y paraespinales de aspecto tomográfico normal.\nGlándulas parótidas con habitual infiltración grasa.\nLengua, piso de la boca y glándulas submaxilares libres de imágenes patológicas.\nLuz orofaríngea, laríngea y traqueal permeable, sin lesiones endoluminales.\nGlándula tiroides de características habituales.\nPlanos grasos del cuello respetados.\nCONCLUSIÓN:\n-ESTUDIO DENTRO DE LÍMITES NORMALES."
        },
        {
                "nombre": "TAC CUELLO CONTRASTADO",
                "alias": [
                        "CUELLO CONTRASTADO",
                        "CT CUELLO CONTRASTADO",
                        "NECK^NECK_CT (ADULT)",
                        "TAC DE CUELLO CONTRASTADO",
                        "TAC CUELLO CTE",
                        "CT CUELLO"
                ],
                "plantilla": "TC DE CUELLO CONTRASTADO\nInformación clínica:\nTÉCNICA:\nSe realiza tomografía de cuello en el plano axial luego de la administración endovenosa de contraste realizando reconstrucciones multiplanares.\nHALLAZGOS:\nNo se reconocen adenomegalias ni masas cervicales.\nMúsculos esternocleidomastoideo, masticadores y paraespinales de aspecto tomográfico normal.\nGlándulas parótidas con habitual infiltración grasa.\nLengua, piso de la boca y glándulas submaxilares libres de imágenes patológicas.\nLuz orofaríngea, laríngea y traqueal permeable, sin lesiones endoluminales.\nGlándula tiroides de características habituales.\nPlanos grasos del cuello respetados.\nCONCLUSION:\n-ESTUDIO DENTRO DE LÍMITES NORMALES."
        },
        {
                "nombre": "TAC CUELLO SYC",
                "alias": [
                        "CUELLO SYC",
                        "CUELLO SIMPLE Y CONTRASTE",
                        "CUELLO SIMPLE Y CONTRASTADO"
                ],
                "plantilla": "TC DE CUELLO SIMPLE Y  CONTRASTADO\nInformación clínica:\nTÉCNICA:\nSe realiza tomografía de cuello en el plano axial antes y despúes de la administración endovenosa de contraste realizando reconstrucciones multiplanares.\nHALLAZGOS:\nNo se reconocen adenomegalias ni masas cervicales.\nMúsculos esternocleidomastoideo, masticadores y paraespinales de aspecto tomográfico normal.\nGlándulas parótidas con habitual infiltración grasa.\nLengua, piso de la boca y glándulas submaxilares libres de imágenes patológicas.\nLuz orofaríngea, laríngea y traqueal permeable, sin lesiones endoluminales.\nGlándula tiroides de características habituales.\nPlanos grasos del cuello respetados.\nCONCLUSION:\n-ESTUDIO DENTRO DE LÍMITES NORMALES."
        },
        {
                "nombre": "TAC PELVIS SIMPLE",
                "alias": [
                        "PELVIS SIMPLE(ADULTO)",
                        "TC PELVIS SIMPLE",
                        "PELVIS^PELVIS_SIMPLE (ADULT)",
                        "TAC DE PELVIS SIMPLE",
                        "PELVIS SIMPLE"
                ],
                "plantilla": "TAC PELVIS SIMPLE\nINFORMACIÓN CLINICA:\nTECNICA:\nSe  realiza  estudio tomografíco  de pelvis simple con reconstrucción multiplanar en ventana ósea y de partes blandas .\nHALLAZGOS:\nLos trayectos ureterales no se aprecian dilatados.\nVejiga distendida sin lesiones ni litiasis.\nLas estructuras intestinales y de colon incluidas en el estudio en la pelvis inferior no muestran alteraciones groseras. La grasa del meso colon se encuentra conservada.\nNo hay liquido libre. No hay colecciones.\nNo se visualizan adenopatías retroperitoneales o pélvicas de tamaño significativo.\nCONCLUSIÓN:\nExamen sin alteraciones significativas."
        },
        {
                "nombre": "TAC PELVIS CONTRASTADA",
                "alias": [
                        "PELVIS CONTRASTADA",
                        "PELVIS CONTRASTADO",
                        "TC PELVIS CONTRASTADA",
                        "TAC PELVIS CONTRASTADO",
                        "PELVIS CONTRASTE"
                ],
                "plantilla": "TAC PELVIS CONTRASTADO\nINFORMACIÓN CLINICA:\nTECNICA:\nSe  realiza  estudio tomografíco  de pelvis contrastada con reconstrucción multiplanar en ventana ósea y de partes blandas .\nHALLAZGOS:\nLos trayectos ureterales no se aprecian dilatados.\nVejiga distendida sin lesiones ni litiasis.\nLas estructuras intestinales y de colon incluidas en el estudio en la pelvis inferior no muestran alteraciones groseras. La grasa del meso colon se encuentra conservada.\nNo hay liquido libre. No hay colecciones.\nNo se visualizan adenopatías retroperitoneales o pélvicas de tamaño significativo.\nCONCLUSIÓN:\nExamen sin alteraciones significativas."
        },
        {
                "nombre": "TAC PELVIS SYC",
                "alias": [
                        "PELVIS SYC",
                        "PELVIS SIMPLE Y CONTRASTE",
                        "PELVIS SIMPLE Y CONTRASTADA",
                        "PELVIS SIMPLE Y CONTRASTADO"
                ],
                "plantilla": "TAC PELVIS SIMPLE Y CON CONTRASTE\nINFORMACIÓN CLINICA:\nTECNICA:\nSe  realiza  estudio tomografíco  de pelvis simple y  contrastada con reconstrucción multiplanar en ventana ósea y de partes blandas .\nHALLAZGOS:\nLos trayectos ureterales no se aprecian dilatados.\nVejiga distendida sin lesiones ni litiasis.\nLas estructuras intestinales y de colon incluidas en el estudio en la pelvis inferior no muestran alteraciones groseras. La grasa del meso colon se encuentra conservada.\nNo hay liquido libre. No hay colecciones.\nNo se visualizan adenopatías retroperitoneales o pélvicas de tamaño significativo.\nCONCLUSIÓN:\nExamen sin alteraciones significativas."
        },
        {
                "nombre": "TAC CARA SIMPLE",
                "alias": [
                        "CARA SIMPLE(ADULTO)",
                        "TC CARA SIMPLE",
                        "FACE^FACE_SIMPLE (ADULT)",
                        "TAC DE CARA SIMPLE",
                        "CARA SIMPLE",
                        "MACIZO FACIAL SIMPLE",
                        "TC MACIZO FACIAL SIMPLE"
                ],
                "plantilla": "TAC DE CARA\nTECNICA:\nSe realiza tomografía de cara y  con equipo multicorte en el plano axial con ventana ósea, sin contraste endovenoso, realizando reconstrucciones multiplanares y reconstrucción 3D.\nHALLAZGOS:\nSenos frontales, maxilares, esfenoidales y celdillas etmoidales correctamente neumatizados.\nComplejos ostiomeatales y canales de drenaje sinunasales permeables.\nLas fosas nasales se encuentran normoaireadas.\nSeptum nasal centrado.\nNo se reconocen alteraciones estructurales o traumáticas óseas.\nCavum faríngeo libre.\nOPINION:\n-ESTUDIO DENTRO DE LÍMITES NORMALES."
        },
        {
                "nombre": "TAC CARA CONTRASTADA",
                "alias": [
                        "CARA CONTRASTADA",
                        "TC CARA CONTRASTADA",
                        "FACE^FACE_CONTRASTE (ADULT)",
                        "TAC DE CARA CONTRASTE",
                        "MACIZO FACIAL CONTRASTADO"
                ],
                "plantilla": "TAC DE CARA CONTRASTADO\nTECNICA:\nSe realiza tomografía de cara y  con equipo multicorte en el plano axial con ventana ósea, con contraste endovenoso, realizando reconstrucciones multiplanares y reconstrucción 3D.\nHALLAZGOS:\nSenos frontales, maxilares, esfenoidales y celdillas etmoidales correctamente neumatizados.\nComplejos ostiomeatales y canales de drenaje sinunasales permeables.\nLas fosas nasales se encuentran normoaireadas.\nSeptum nasal centrado.\nNo se reconocen alteraciones estructurales o traumáticas óseas.\nCavum faríngeo libre.\nOPINION:\n-ESTUDIO DENTRO DE LÍMITES NORMALES."
        },
        {
                "nombre": "TAC CARA SYC",
                "alias": [
                        "CARA SYC",
                        "CARA SIMPLE Y CONTRASTE",
                        "CARA SIMPLE Y CONTRASTADA",
                        "MACIZO FACIAL SYC"
                ],
                "plantilla": "TAC DE CARA SIMPLE Y CON  CONTRASTE\nTECNICA:\nSe realiza tomografía de cara y  con equipo multicorte en el plano axial con ventana ósea, simple y con contraste endovenoso, realizando reconstrucciones multiplanares y reconstrucción 3D.\nHALLAZGOS:\nSenos frontales, maxilares, esfenoidales y celdillas etmoidales correctamente neumatizados.\nComplejos ostiomeatales y canales de drenaje sinunasales permeables.\nLas fosas nasales se encuentran normoaireadas.\nSeptum nasal centrado.\nNo se reconocen alteraciones estructurales o traumáticas óseas.\nCavum faríngeo libre.\nOPINION:\n-ESTUDIO DENTRO DE LÍMITES NORMALES."
        },
        {
                "nombre": "TAC OIDOS",
                "alias": [
                        "CT OIDOS",
                        "HEAD^OIDOS (ADULT)",
                        "OIDOS(ADULTO)",
                        "TAC DE OIDOS",
                        "TAC  DE OIDOS",
                        "TAC DE OIDO",
                        "TAC DE OIDO IZQ"
                ],
                "plantilla": "TC DE OIDOS\nTECNICA:\nSe realiza tomografía de ambos oídos, con equipo multicorte en el plano axial con ventana ósea, sin contraste endovenoso, realizando reconstrucciones multiplanares.\nHALLAZGOS:\nConductos auditivos externos permeables.\nCorrecta neumatización mastoidea bilateral.\nAmbas cajas timpánicas y antros mastoideos se presentan normoaireadas.\nLas cadenas osiculares son de características normales.\nCócleas y canales semicirculares de aspecto tomográfico adecuado.\nAmbos C.A.I. son de características normales.\nLas cisternas pontocerebelosas se encuentran libres.\nOPINION:\n-ESTUDIO DENTRO DE LÍMITES NORMALES."
        },
        {
                "nombre": "TAC COLUMNA CERVICAL SIMPLE",
                "alias": [
                        "COL. CERVICAL(ADULTO)",
                        "SPINE^CERVICAL (ADULT)"
                ],
                "plantilla": "TC DE COLUMNA CERVICAL\nTÉCNICA:\nSe ha realizado tomografía de la columna cervical, sin contraste endovenoso, guiada por una radiología digital lateral previa, realizando reconstrucciones multiplanares.\nHALLAZGOS:\nNo se reconocen alteraciones estructurales ni traumáticas óseas.\nEspacios intervertebrales discales de altura conservada.\nLos diámetros globales del canal espinal están respetados.\nCorrecta alineación vertebral posterior sin signos de espondilolistesis.\nLa apófisis odontoide está ubicada en línea media, conservando su distancia normal con el arco anterior del atlas.\nOPINIÓN:\n-ESTUDIO DENTRO DE LIMITES NORMALES."
        },
        {
                "nombre": "TAC COLUMNA CERVICAL CONTRASTADA",
                "alias": [
                        "CERVICAL_CT (ADULT)"
                ],
                "plantilla": "TC DE COLUMNA CERVICAL CONTRASTADA\nTÉCNICA:\nSe ha realizado tomografía de la columna cervical, con contraste endovenoso, guiada por una radiología digital lateral previa, realizando reconstrucciones multiplanares.\nHALLAZGOS:\nNo se reconocen alteraciones estructurales ni traumáticas óseas.\nEspacios intervertebrales discales de altura conservada.\nLos diámetros globales del canal espinal están respetados.\nCorrecta alineación vertebral posterior sin signos de espondilolistesis.\nLa apófisis odontoide está ubicada en línea media, conservando su distancia normal con el arco anterior del atlas.\nOPINIÓN:\n-ESTUDIO DENTRO DE LIMITES NORMALES."
        },
        {
                "nombre": "TAC COLUMNA LUMBAR",
                "alias": [
                        "COL. LUMBAR(ADULTO)",
                        "SPINE^LUMBAR (ADULT)"
                ],
                "plantilla": "TC DE COLUMNA LUMBAR\nTÉCNICA:\nSe ha realizado tomografía de la columna lumbar, sin contraste endovenoso, guiada por una radiología digital lateral previa, realizando reconstrucciones multiplanares.\nHALLAZGOS:\nNo se reconocen alteraciones estructurales ni traumáticas óseas.\nEspacios intervertebrales discales de altura conservada.\nLos diámetros globales del canal espinal están respetados.\nNo se reconocen herniaciones discales en los niveles explorados.\nCorrecta alineación vertebral posterior sin signos de espondilolistesis.\nOPINIÓN:\n-ESTUDIO DENTRO DE LIMITES NORMALES."
        },
        {
                "nombre": "TAC COLUMNA LUMBOSACRA",
                "alias": [
                        "COL. LUMBOSACRA(ADULTO)",
                        "SPINE LUMBOSACRA (ADULT)",
                        "SPINE LUMBOSACRA(ADULT)",
                        "TC COLUMNA LUMBOSACRA"
                ],
                "plantilla": "TC DE COLUMNA LUMBOSACRA\nTÉCNICA:\nSe ha realizado tomografía de la columna lumbar, sin contraste endovenoso, guiada por una radiología digital lateral previa, realizando reconstrucciones multiplanares.\nHALLAZGOS:\nNo se reconocen alteraciones estructurales ni traumáticas óseas.\nEspacios intervertebrales discales de altura conservada.\nLos diámetros globales del canal espinal están respetados.\nNo se reconocen herniaciones discales en los niveles explorados.\nCorrecta alineación vertebral posterior sin signos de espondilolistesis.\nOPINIÓN:\n-ESTUDIO DENTRO DE LIMITES NORMALES."
        },
        {
                "nombre": "TAC COLUMNA DORSOLUMBAR",
                "alias": [
                        "DORSALUMBAR (ADULT)",
                        "SPINE DORSOLUMBAR (ADULT)",
                        "SPINE DORSOLUMBAR(ADULT)"
                ],
                "plantilla": "TC DE COLUMNA DORSOLUMBAR\nInformación clínica:\nTÉCNICA:\nSe ha realizado tomografía de la columna dorsal y lumbar, sin contraste endovenoso, realizando reconstrucciones multiplanares.\nHALLAZGOS:\nNo se reconocen alteraciones estructurales ni traumáticas óseas.\nEspacios intervertebrales discales de altura conservada.\nLos diámetros globales del canal espinal están respetados.\nNo se reconocen herniaciones discales en los niveles explorados.\nCorrecta alineación vertebral posterior sin signos de espondilolistesis.\nOPINIÓN:\n-ESTUDIO DENTRO DE LIMITES NORMALES."
        },
        {
                "nombre": "TAC COLUMNA CERVICODORSAL",
                "alias": [
                        "SPINE CERVICODORSAL (ADULT)"
                ],
                "plantilla": "TC DE COLUMNA CERVICODORSAL\nInformación clínica:\nTÉCNICA:\nSe ha realizado tomografía de la columna cervical y dorsal, sin contraste endovenoso, realizando reconstrucciones multiplanares.\nHALLAZGOS:\nNo se reconocen alteraciones estructurales ni traumáticas óseas en los cuerpos vertebrales cervicales o dorsales.\nEspacios intervertebrales discales de altura conservada.\nLos diámetros globales del canal espinal están respetados.\nCorrecta alineación vertebral posterior sin signos de espondilolistesis.\nLa apófisis odontoide está ubicada en línea media, conservando su distancia normal con el arco anterior del atlas.\nA nivel de el parénquima pulmonar se visualizan áreas de consolidación parenquimatosa en el lóbulo superior izquierdo en\nrelación con contusiones pulmonares.\nOPINIÓN:"
        },
        {
                "nombre": "TAC HOMBRO",
                "alias": [
                        "TC DE HOMBRO IZQ",
                        "TAC DE HOMBRO",
                        "SHOULDER^HOMBRO (ADULT)",
                        "HOMBRO 3D (ADULT)",
                        "HOMBRO DER 3D(ADULTO)",
                        "TC DE HOMBRO DERECHO",
                        "TAC DE HOMBRO IZQ",
                        "TAC DE HOMBRO DER 3D.",
                        "HOMBRO 3D(ADULT)",
                        "TAC DE HOMBRO DER"
                ],
                "plantilla": "TAC DE HOMBRO\nDatos clínicos: DOLOR\nMÉTODO: Se realizaron cortes en tomógrafo multicorte de 1 mm cada 2 mm y sagitales de 3 mm cada 3 mm con reconstrucción para ventana de hueso.\nHALLAZGOS:\nDensidad ósea conservada.\nNo hay trazos de fracturas.\nEspacios articulares y relaciones conservadas.\nLos grupos musculares visualizados conservan su morfología y densidad habitual, así como estructuras vasculares, tejido\ncelular subcutáneo y piel.\nOPINIÓN:\n- Tac de hombro sin alteraciones significativas."
        },
        {
                "nombre": "TAC CADERA",
                "alias": [
                        "PELVIS^CADERA (ADULT)",
                        "PELVIS^CADERA_BILATERAL (ADULT)",
                        "TC DE CADERA IZQ",
                        "TAC DE CADERA",
                        "TAC DE CADERA IZQ",
                        "TAC DE CADERA DER",
                        "TAC DE CADERA BILATERAL"
                ],
                "plantilla": "TOMOGRAFIA DE CADERA\nIndicación: sospecha de deformidad congénita de cadera\nTécnica: se realiza estudio con tomografo multidetector de 16 canales con reconstrucciones axiales, coronales y sagitales.\nHallazgos:\nExiste adecuada localización de las cabezas femorales con ángulos centro borde anterior y posterior dentro de límites normales.\nÁngulo centro borde anterior derecho: 22°, izquierdo: 23°\nÁngulo centro borde posterior derecho: 1°, izquierdo: 1°\nEl índice acetabular está dentro de límites esperados para la edad: derecho: 96°, izquierdo: 98°.\nEl ángulo de anteversión acetabular está dentro de los limites esperados para la edad: dercho: 14°, izquierdo: 14°\nEl ángulo cervicodifisiario bilateral es normal, derecho: 128°, izquierdo: 131°\nLa densidad ósea es normal, no se observan trazos de fractura evidentes,\nTejidos blandos sin alteraciones.\nOpinión:\nEstudio dentro de límites normales para la edad"
        },
        {
                "nombre": "TAC CODO",
                "alias": [
                        "TAC DE CODO",
                        "TC DE CODO",
                        "TC DE CODO DER",
                        "TC DE CODO IZQ",
                        "ELBOW^CODO (ADULT)"
                ],
                "plantilla": "TAC DE CODO\nDATOS CLÍNICOS:\nTÉCNICA:\nSe realiza tomografia multicorte, axial con reconstrucciones multiplanares de codo izquierdo.+ 3D.\nEstudio con artefacto de movimiento, disminuye sensibilidad y especificidad diagnostica.\nHALLAZGOS:\nLas estructuras visualizadas muestran densidades óseas y patrón trabecular conservados para su edad.\nLa relación cortico-medular es satisfactoria y no hay reacción perióstica ni destrucción cortical.\nNo se demuestran alteraciones óseas traumáticas evidentes, las relaciones y los espacios articulares se encuentran\nconservados.\nRelaciones articulares normales.\nNo existen lesiones óseas expansivas y no hay compromiso osteolítico ni osteoblástico.\nLos tejidos blandos se visualizan satisfactoriamente, los planos grasos y musculares no muestran alteraciones y no hay\ncalcificaciones patológicas.\nCONCLUSIÓN:\n- Tomografia de codo sin alteraciones."
        },
        {
                "nombre": "TAC MUNECA",
                "alias": [
                        "TC DE MUÑECA",
                        "TC DE MUÑECA DER",
                        "TC DE MUÑECA IZQ",
                        "WRIST^MUNECA (ADULT)",
                        "TAC DE MUÑECA",
                        "TAC DE MUÑECA DER",
                        "TAC DE MUÑECA IZQ"
                ],
                "plantilla": "TC DE MUÑECA DERECHA\nMOTIVO DE EXPLORACIÓN:\nTÉCNICA\nSe practica exploración TC mediante adquisición axial con ventana de partes blandas y ósea. Se realizan reconstrucciones  multiplanares y 3D.\nHALLAZGOS\nRadio distal con morfología y densidad ósea conservadas. No hay signos de fractura actual\nArticulación radiocarpiana conservada.\nCúbito distal con morfología y densidad ósea conservadas. No hay signos de fractura actual.\nVarianza ulnar neutra.\nArticulación radiocubital distal conservada.\nHuesos del carpo con morfología y densidad ósea conservadas.\nAlineación normal.\nCONCLUSIÓN\nNo se observan hallazgos de características patológicas significativas en el estudio actual."
        },
        {
                "nombre": "TAC MANO",
                "alias": [
                        "TAC DE MANO",
                        "TC DE MANO",
                        "TC DE MANO DER",
                        "TC DE MANO IZQ",
                        "HAND^MANO (ADULT)",
                        "TAC DE MANO DER",
                        "TAC DE MANO IZQ"
                ],
                "plantilla": "TC DE MANO\nMOTIVO DE EXPLORACIÓN: traumatismo.\nTÉCNICA:\nSe practica exploración TC mediante adquisición axial con ventana de partes blandas y ósea. Se realizan reconstrucciones  multiplanares y 3D.\nHALLAZGOS:\nEstructuras óseas con morfología y densidad conservadas. No hay signos concluyentes de fractura aguda.\nCambios degenerativos de articulaciones trapecio escafoidea y escafotrapezoide. Resto de articulaciones conservadas.\nAlineación conservada.\nNo hay alteración de los tejidos blandos examinados.\nCONCLUSIÓN:\nNo se aprecian signos concluyentes de fractura."
        },
        {
                "nombre": "TAC TOBILLO",
                "alias": [
                        "TAC DE TOBILLO",
                        "TC DE TOBILLO",
                        "TC DE TOBILLO DER",
                        "TC DE TOBILLO IZQ",
                        "ANKLE^TOBILLO (ADULT)",
                        "TAC DE TOBILLO DER",
                        "TAC DE TOBILLO IZQ",
                        "TOBILLO 3D"
                ],
                "plantilla": "TC DE TOBILLO\nTÉCNICA\nSe practica exploración TC mediante adquisición axial con ventana de partes blandas y ósea. Se realizan reconstrucciones\nmultiplanares.\nHALLAZGOS\nEstructuras oseas de tobillo con morfología y densidad ósea conservadas. No se aprecian signos de lesión ósea aguda\nArticulaciones tibioastragalina, subastragalinas , tibioperonea distal y articulaciones del tarso conservadas.\nAlineación normal.\nNo hay aumento significativo de partes blandas.\nCONCLUSIÓN\nNo se observan hallazgos de características patológicas significativas en el estudio actual."
        },
        {
                "nombre": "RX DE TORAX",
                "alias": [
                        "RX DE TORAX",
                        "TORAX",
                        "RX DE TORAX NORMAL",
                        "RX TORAX",
                        "TORAX 2P",
                        "RX TORAX PA",
                        "PECHO DE ADULTO: 2 VISTAS"
                ],
                "plantilla": "RX DE TORAX \nTÉCNICA\nSe obtienen radiografías de tórax en proyecciones PA y lateral.\nHALLAZGOS\nEl revestimiento de partes blandas del tórax es normal. Las estructuras óseas no muestran cambios de significado patológico. Diafragmas en posición habitual y ángulos costodiafragmáticos libres. Los pulmones tienen una aireación normal. La vasculatura pulmonar y la aorta no presentan alteraciones. La situación, los límites y el calibre de la tráquea son normales. No hay ensanchamiento de las líneas paratraqueales ni desplazamiento de las diferentes líneas mediastinales. Silueta cardíaca de tamaño y configuración normales.\nCONCLUSIÓN\nRX DE TÓRAX DENTRO DE LÍMITES NORMALES" 
        },
        {
                "nombre": "RX COLUMNA LUMBOSACRA",
                "alias": [
                        "COLUMNA",
                        "RX DE COLUMNA LUMBOSACRA",
                        "COLUMNA LUMBAR: 2 VISTAS",
                        "RX CLS",
                        "CLS".
                        "RADIOGRAFIA COLUMNA LUMBOSACRA",
                        "RX DE C.L.S"
                        
                ],
                "plantilla": "RX DE COLUMNA LUMBOSACRA \nTÉCNICA\nSe practicaron proyecciones en anteroposterior y lateral de columna lumbosacra. \nHALLAZGOS\nEn las proyecciones obtenidas se observa que la forma y altura de los cuerpos vertebrales, así como también la amplitud de los espacios intervertebrales, están preservados. No hay signos de espondilolisis ni espondilolistesis.\nCONCLUSIÓN\n-Rx de columna lumbosacra normal." 
        }

        

        
        
];

    function normalizar(texto) {
        return (texto || '')
            .toUpperCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[_^().,;:]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function obtenerCampoInforme() {
        return document.querySelector('textarea.add_text, textarea[name="textfield"], textarea');
    }

    function obtenerEstudioActual() {
        const spans = Array.from(document.querySelectorAll('td[contenteditable] span'));

        for (const span of spans) {
            const texto = span.textContent.trim();
            const n = normalizar(texto);

            if (
                texto &&
                (
                    n.includes('TORAX') ||
                    n.includes('THORAX') ||
                    n.includes('ABDOMEN') ||
                    n.includes('ANGIOTAC') ||
                    n.includes('UROTAC') ||
                    n.includes('UROTC') ||
                    n.includes('UROTOMOGRAFIA') ||
                    n.includes('CRANEO') ||
                    n.includes('SPN') ||
                    n.includes('SENOS') ||
                    n.includes('CUELLO') ||
                    n.includes('NECK') ||
                    n.includes('PELVIS') ||
                    n.includes('CARA') ||
                    n.includes('FACE') ||
                    n.includes('OIDO') ||
                    n.includes('OIDOS') ||
                    n.includes('HEAD') ||
                    n.includes('COLUMNA') ||
                    n.includes('SPINE') ||
                    n.includes('CERVICAL') ||
                    n.includes('LUMBAR') ||
                    n.includes('HOMBRO') ||
                    n.includes('SHOULDER') ||
                    n.includes('CADERA') ||
                    n.includes('CODO') ||
                    n.includes('ELBOW') ||
                    n.includes('MUNECA') ||
                    n.includes('MUÑECA') ||
                    n.includes('WRIST') ||
                    n.includes('MANO') ||
                    n.includes('HAND') ||
                    n.includes('TOBILLO') ||
                    n.includes('ANKLE') ||
                    n.includes('RODILLA') ||
                    n.includes('KNEE') ||
                    n.includes('RX') ||
                    n.includes('RADIOGRAFIA') ||
                    n.includes('LUMBOSACRA')
                )
            ) {
                return texto;
            }
        }

        return '';
    }

    function detectarPlantilla(estudio) {
        const estudioNorm = normalizar(estudio);
        let mejorCoincidencia = null;

        for (const item of PLANTILLAS) {
            for (const alias of item.alias) {
                const aliasNorm = normalizar(alias);

                if (!aliasNorm) continue;

                if (estudioNorm === aliasNorm) {
                    return item;
                }

                if (
                    estudioNorm.includes(aliasNorm) ||
                    aliasNorm.includes(estudioNorm)
                ) {
                    if (
                        !mejorCoincidencia ||
                        aliasNorm.length > mejorCoincidencia.aliasNorm.length
                    ) {
                        mejorCoincidencia = { item, aliasNorm };
                    }
                }
            }
        }

        return mejorCoincidencia ? mejorCoincidencia.item : null;
    }

    function insertarPlantilla() {
        const campo = obtenerCampoInforme();
        const estudio = obtenerEstudioActual();

        if (!campo || !estudio) return;

        if (campo.value && campo.value.trim() !== '') return;

        const item = detectarPlantilla(estudio);

        if (!item) {
            console.log('Sin plantilla configurada para:', estudio);
            return;
        }

        campo.value = item.plantilla;
        campo.dispatchEvent(new Event('input', { bubbles: true }));
        campo.dispatchEvent(new Event('change', { bubbles: true }));
        campo.focus();

        console.log('Plantilla insertada:', item.nombre, estudio);
    }

    setTimeout(insertarPlantilla, 3000);

})();
