// Graba los valores del formulario a la url
const words = new URLSearchParams(window.location.search);

// Limpia y capitaliza los nombres de las partes
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Asigna variables a los nombres usados en el formulario
const actor= cleanAndCap(words.get('actor'));
const demandado = cleanAndCap(words.get('demandado'));

const salario = words.get('salario');
const categoria = cleanAndCap(words.get('categoria'));

const semac = words.get('semac');
const actividad = words.get('actividad');

const antig = words.get('antig');
const fechsemac = words.get('fechsemac');

const caso = words.get('caso');
const hechos = words.get('hechos');

const prueba = words.get('prueba');
const nocobra = words.get('nocobra');
const numero = words.get('numero');
const ano = words.get('ano');

var antiguedad = new Date(words.get('antig'));
var hoy = new Date();

function diff_months(dt2, dt1){
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.floor(diff));
 }

function convert(dinero){
    return dinero.replace(",",".");}

meses = diff_months(hoy, antiguedad);

indemnizacionextincion = (Math.round(((meses*convert(salario)*2.75) + Number.EPSILON) * 100) / 100).toString().replace(".", ",");

// La frase contiene HTML y texto que se pondrá en la página del resultado
const sentencia = `<p>Visto por m&iacute;, D. Javier Ercilla Garc&iacute;a, Magistrado del Juzgado de lo Social N&ordm; 10 de los de Las Palmas de Gran Canaria y su provincia, en audiencia p&uacute;blica, el juicio sobre Extinci&oacute;n del contrato por voluntad del trabajador, seguido ante este Juzgado bajo n&ordm; 000000000<span class="word" title="id: numero">${numero}</span>/<span class="word" title="id: ano">${ano}</span>, promovido a instancia de <span class="word" title="id: actor">${actor}</span>, contra <span class="word" title="id: demandado">${demandado}</span>, atendiendo a los siguientes.</p>
<h4><strong>ANTECEDENTES DE HECHO</strong></h4>
<p><strong>PRIMERO.- </strong>La parte actora arriba indicada present&oacute; en el Decanato una demanda que fue repartida a este Juzgado y en la que, previa alegaci&oacute;n de los hechos y fundamentos de derecho que estim&oacute; procedentes, termin&oacute; suplicando que se dictara una sentencia de conformidad con sus pretensiones.</p>
<p></p>
<p><strong>SEGUNDO.- </strong>Admitida a tr&aacute;mite la demanda, las partes fueron citadas al acto de juicio. Comparecidas las partes, asistidas en la forma que consta en acta, se pas&oacute; al acto de juicio. En &eacute;l, y una vez que se hubo efectuado la daci&oacute;n de cuenta de los antecedentes, la parte actora se ratific&oacute; en su demanda. La parte demandada se opuso a la demanda y la contest&oacute; formulando las alegaciones que constan en acta. Seguidamente, fue abierta la fase probatoria, en la que se practicaron las pruebas que, propuestas por las partes, fueron declaradas pertinentes y constan documentadas en autos. Practicada la prueba, las partes informaron sobre sus pretensiones y el juicio qued&oacute; visto para sentencia.</p>
<p><strong>TERCERO.- </strong>En la sustanciaci&oacute;n de estos autos se han observado todas las prescripciones legales aplicables salvo el sistema de plazos.</p>
<h4>HECHOS PROBADOS</h4>
<p></p>
<p><strong>PRIMERO.-</strong> <span class="word" title="id: demandado">${demandado}</span> ha venido prestando servicios laborales para la empresa <span class=""word" title="id: demandado">${demandado}</span> dedicada a la actividad de <span class="word" title="id: actividad">${actividad}</span>, con antig&uuml;edad desde el d&iacute;a <span class="word" title="id: antig">${antig}</span>, categor&iacute;a profesional de <span class="word" title="id: categoria">${categoria}</span> y un salario mensual/diario bruto de <span class="word" title="id: salario">${salario}</span> euros, incluidas las partes proporcionales de las pagas extraordinarias, en virtud de un contrato de trabajo de duraci&oacute;n indefinida a tiempo completo.</p>
<p><strong>SEGUNDO.-</strong> La parte demandante no ostenta ni ha ostentado en el a&ntilde;o anterior al despido la condici&oacute;n de representante legal o sindical de las personas trabajadoras.</p>
<p><strong>TERCERO.-</strong> La empresa procedió a:</p>
<p><em><span class="word" title="id: hechos">${hechos}</span></em></p>
<p><strong>CUARTO.-</strong> La parte demandante promovi&oacute; la conciliaci&oacute;n previa al proceso, que se celebr&oacute; el d&iacute;a <span class="word" title="id: fechsemac">${fechsemac}</span> con el resultado de <span class="word" title="id: semac">${semac}</span>, presentando posteriormente demanda de extinción.</p>
<h4>FUNDAMENTOS DE DERECHO</h4>
<p></p>
<p><strong>PRIMERO.- </strong>En cumplimiento de lo dispuesto en el art. 97.2 de la LRJS este &oacute;rgano judicial debe explicitar el razonamiento probatorio. Los hechos probados primero, segundo, y tercero tienen la naturaleza de hechos admitidos o conformes. Se trata de hechos que son alegados por una de las partes en el proceso y son admitidos por la contraria, los cuales no son objeto de prueba, ya que la afirmaci&oacute;n f&aacute;ctica de las partes vincula al juez (arts. 87.1 LRJS y 281.3 LEC).</p>
<p>Los hechos probados cuarto y quinto resultan del an&aacute;lisis del conjunto de la prueba practicada conforme a las reglas de la sana cr&iacute;tica, habi&eacute;ndose acreditado por la prueba practicada en el acto del juicio oral, a saber <span class="word" title="id: prueba">${prueba}</span>.</p>
<p></p>
<p><strong>SEGUNDO.- </strong>Ejercita la parte actora la acción de extinción de la relación laboral, por entender que se ha producido una modificación sustancial de las condiciones de trabajo que redundan en su formación profesional y dignidad por los hechos que se describen en la demanda.</p>
<p>La parte demandada se opone negando la realidad de los hechos afirmados por la demandada.</p>
<p></p>
<p><strong>TERCERO.- </strong>En sede de lo previsto en el art. 50.1 ET, ser&aacute; causa justa para que el trabajador pueda solicitar la extinci&oacute;n del contrato cualquier incumplimiento grave de sus obligaciones por parte del empresario.</p>
<p>Las modificaciones sustanciales son causa leg&iacute;tima para solicitar la extinci&oacute;n del contrato pero no bastan por s&iacute; mismas. Ahora bien, es preciso que adem&aacute;s causen al trabajador da&ntilde;os en <em>"la formaci&oacute;n profesional y la dignidad personal"</em>.</p>
<p>La idea de profesionalidad se vincula con el derecho reconocido a los trabajadores de promoci&oacute;n dentro de la empresa (art. 35 CE). En este sentido la misma queda afectada desde el momento que al trabajador se le disminuye la categor&iacute;a o la funci&oacute;n que ten&iacute;a asignada, pero si ello se produce con el plus preciso para que tal modificaci&oacute;n pueda incardinarse en el precepto que se entiende infringido. Respecto a la incidencia en la dignidad del trabajador, ha sido la propia evoluci&oacute;n Jurisprudencial la que ha fijado tambi&eacute;n el alcance de esa noci&oacute;n extendi&eacute;ndolo a todo ataque al respeto que merece el trabajador ante sus compa&ntilde;eros y ante sus jefes como profesional, no pudi&eacute;ndosele situar en una posici&oacute;n en que por las circunstancias que se den en ella se provoque un descr&eacute;dito en este aspecto.</p>
<p>La Jurisprudencia ha establecido que la causa que autoriza la extinci&oacute;n contractual del art. 50 del ET requiere que la modificaci&oacute;n de las condiciones de trabajo sea grave, es decir que afecte a lo esencial del contrato y que en t&eacute;rminos generales frustre las aspiraciones o expectativas leg&iacute;timas del trabajador, y ha de ser tambi&eacute;n voluntaria, es decir, reveladora de una conducta pertinaz y definitiva de incumplimiento de las obligaciones contractuales.</p>
<p></p>
<p><strong>CUARTO.-</strong> En el caso presente, <span class="word" title="id: caso">${caso}<span>.</p>
<p>Trayendo la realidad descrita en los Hechos Probados a la norma legal citada y la doctrina jur&iacute;dica expresada no cabe duda de que existe causa legal para resolver el contrato de trabajo por incumplimiento de la empresa, dado que la actora no cobra desde <span class="word" title="id: nocobra">${nocobra}</span>.</p>
<p><strong>QUINTO.- </strong>La declaraci&oacute;n de extinci&oacute;n de la relaci&oacute;n laboral obliga a calcular la indemnizaci&oacute;n extintiva de acuerdo con el art. 110.1 de la LRJS y con el art. 56.1 del ET ascendiendo a <em>&ldquo;treinta y tres d&iacute;as de salario por a&ntilde;o de servicio, prorrate&aacute;ndose por meses los periodos de tiempo inferiores a un a&ntilde;o, hasta un m&aacute;ximo de veinticuatro mensualidades&rdquo;.</em> Ello significa que por cada mes de prestaci&oacute;n de servicios laborales se devengan 2,75 d&iacute;as indemnizatorios (33 d&iacute;as de salario anuales divididos por los 12 meses del a&ntilde;o), con el tope de 720 d&iacute;as.</p>
<p>El c&aacute;lculo de esta indemnizaci&oacute;n debe hacerse sobre la base del periodo en que la parte actora ha prestado servicios laborales para el empleador, tomando como fecha inicial el d&iacute;a <span class="word" title="id: antig">${antig}</span> correspondiente a la antig&uuml;edad reconocida en esta resoluci&oacute;n y como fecha final el d&iacute;a de extinci&oacute;n de la relaci&oacute;n laboral, a la fecha de la presente Sentencia. El prorrateo de los d&iacute;as que exceden de un mes completo se computa como si la prestaci&oacute;n de servicios se hubiera efectuado durante toda la mensualidad: se considera como un mes completo (STS de 20 de julio de 2009, recurso 2398/2008; 20 de junio de 2012, recurso 2931/2011; y 6 de mayo de 2014, recurso 562/2013).</p>
<p>Aplicando el referido criterio, la indemnizaci&oacute;n total asciende a ${indemnizacionextincion} euros. De esa cuant&iacute;a debe deducirse la indemnizaci&oacute;n que por cese del contrato haya podido percibir la parte demandante.</p>
<p><strong>SEXTO.- </strong>Habi&eacute;ndose citado al Fondo de Garant&iacute;a Salarial, conforme a lo dispuesto en el art&iacute;culo 23.1 de la LRJS, &uacute;nicamente puede ser condenado a estar y pasar por este pronunciamiento, sin perjuicio de resultar ulteriormente la insolvencia de la empresa, deba asumir su responsabilidad legal.</p>
<p><strong>S&Eacute;PTIMO.- </strong>A tenor de lo dispuesto en el art. 97.4 de la LRJS se debe indicar a las partes procesales si la presente sentencia es firme o no, y en su caso los recursos que contra ella proceden, as&iacute; como las circunstancias de su interposici&oacute;n. En cumplimiento de ello se advierte a las partes que la presente resoluci&oacute;n no es firme y que contra ella puede interponerse recurso de suplicaci&oacute;n con todos los requisitos que en el fallo se se&ntilde;alan, seg&uacute;n se desprende del art. 191.3.a) de la LRJS.</p>
<p>Vistos los preceptos citados y dem&aacute;s de general y pertinente aplicaci&oacute;n.</p>
<h4>FALLO</h4>
<p>Estimo la demanda de extinci&oacute;n interpuesta por <span class="word" title="id: actor">${actor}</span> frente a la empresa <span class="word" title="id: demandado">${demandado}</span>. Declaro extinguida la relaci&oacute;n laboral que un&iacute;a a las partes, con efectos desde la presente resoluci&oacute;n judicial, condenando a la empresa a abonar al actor en concepto de indemnizaci&oacute;n la cantidad de ${indemnizacionextincion} euros.</p>
<p>Notif&iacute;quese a las partes en legal forma.</p>
<p>Contra la presente sentencia cabe interponer recurso de suplicaci&oacute;n ante la Sala de lo Social del Tribunal Superior de Justicia, que deber&aacute; prepararse ante este mismo Juzgado mediante escrito o comparecencia de acuerdo con lo dispuesto en el Texto Refundido de la Ley Reguladora de la Jurisdicci&oacute;n Social, dentro de los cinco d&iacute;as siguientes al en que se produzca su notificaci&oacute;n; debiendo la empresa condenada si fuere &eacute;sta la que recurriere, presentar resguardo acreditativo de haber ingresado tanto el importe de la condena como el dep&oacute;sito de 300 euros previsto en el art&iacute;culo 229 de la Ley Reguladora de la Jurisdicci&oacute;n Social en la Cuenta de Dep&oacute;sitos y Consignaciones de este Juzgado.</p>
<p>As&iacute; por esta mi sentencia lo pronuncio, mando y firmo.</p>`;

// Grabar el valor del contenido de la sentencia
const storyEl = document.getElementById('sentencia');
// Progar el elemento sentencia con el valor de las variables
storyEl.innerHTML = sentencia;
