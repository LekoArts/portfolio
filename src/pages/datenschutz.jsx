/* eslint max-len: 0 */
/* eslint react/no-unescaped-entities: 0 */
/* eslint no-script-url: 0 */

import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Header from '../components/Header';
import config from '../../config/website';

const Datenschutzerklaerung = () => (
  <React.Fragment>
    <Helmet title={`Datenschutzerklärung | ${config.siteTitle}`} />
    <Header slim>Datenschutzerklärung</Header>
    <div style={{ marginTop: '3rem' }}>
      <Container type="article">
        <h2>Datenschutz</h2>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
          personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren
          Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt
          dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung
          nicht an Dritte weitergegeben.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>
        <h2>Cookies</h2>
        <p>
          Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden
          an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer
          zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser
          speichert.
        </p>
        <p>
          Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres
          Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen.
          Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
        </p>
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur
          im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das
          automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann
          die Funktionalität dieser Website eingeschränkt sein.
        </p>
        <h2>Google Analytics</h2>
        <p>
          Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600
          Amphitheatre Parkway Mountain View, CA 94043, USA.
        </p>
        <p>
          Google Analytics verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert
          werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten
          Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA
          übertragen und dort gespeichert.
        </p>
        <p>
          Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von
          Google:{' '}
          <a href="https://support.google.com/analytics/answer/6004245?hl=de">
            https://support.google.com/analytics/answer/6004245?hl=de
          </a>
        </p>
        <h4>Browser Plugin</h4>
        <p>
          Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern;
          wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser
          Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie
          erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
          Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare
          Browser-Plugin herunterladen und installieren:{' '}
          <a href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</a>
        </p>
        <h4>Widerspruch gegen Datenerfassung</h4>
        <p>
          Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken.
          Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website
          verhindert: <a href="javascript:gaOptout();">Google Analytics deaktivieren</a>
        </p>
        <h4>IP-Anonymisierung</h4>
        <p>
          Wir nutzen die Funktion "Aktivierung der IP-Anonymisierung" auf dieser Webseite. Dadurch wird Ihre IPAdresse
          von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des
          Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse
          an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website
          wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
          Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene
          Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem
          Browser übermittelte IPAdresse wird nicht mit anderen Daten von Google zusammengeführt.
        </p>
        <h2>SSL-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
          Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://"
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten
          mitgelesen werden.
        </p>
        <p>
          Quelle:{' '}
          <a href="https://www.e-recht24.de/muster-datenschutzerklaerung.html">
            https://www.e-recht24.de/muster-datenschutzerklaerung.html
          </a>
        </p>
      </Container>
    </div>
    <Footer />
  </React.Fragment>
);

export default Datenschutzerklaerung;
