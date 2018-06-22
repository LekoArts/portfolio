/* eslint max-len: 0 */
/* eslint react/no-unescaped-entities: 0 */
/* eslint no-script-url: 0 */
/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Layout } from 'elements';
import Footer from '../components/Footer';
import Header from '../components/Header';
import config from '../../config/website';

const Datenschutzerklaerung = () => (
  <Layout>
    <Helmet title={`Datenschutzerklärung | ${config.siteTitle}`} />
    <Header title="Datenschutzerklärung" />
    <div style={{ marginTop: '3rem' }}>
      <Container type="article">
        <p>
          Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen
          Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten,
          Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf. (nachfolgend
          gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B.
          „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der
          Datenschutzgrundverordnung (DSGVO).
        </p>
        <h3>Verantwortlicher</h3>
        <p>
          Lennart Jörgens <br />
          Pfarrer-Söller-Platz 13 <br />
          63839 Kleinwallstadt
        </p>
        <h3>Arten der verarbeiteten Daten:</h3>
        <ul>
          <li>Bestandsdaten (z.B. Namen, Adressen)</li>
          <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
          <li>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos)</li>
          <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
          <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
        </ul>
        <h3>Zweck der Verarbeitung</h3>
        <ul>
          <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte</li>
          <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</li>
          <li>Sicherheitsmaßnahmen</li>
          <li>Reichweitenmessung/Marketing</li>
        </ul>
        <h3>Verwendete Begrifflichkeiten</h3>
        <p>
          „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
          natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person
          angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer
          Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen
          Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen,
          wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.
        </p>
        <p>
          „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang oder jede solche
          Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden
          Umgang mit Daten.
        </p>
        <p>
          Als „Verantwortlicher“ wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle,
          die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
          entscheidet, bezeichnet.
        </p>
        <h3>Maßgebliche Rechtsgrundlagen</h3>
        <p>
          Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Sofern
          die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die Rechtsgrundlage für
          die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die
          Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von
          Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer
          rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO, und die Rechtsgrundlage für die Verarbeitung zur
          Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass lebenswichtige
          Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener
          Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
        </p>
        <h3>Sicherheitsmaßnahmen</h3>
        <p>
          Wir bitten Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die
          Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies
          erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits
          (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.
        </p>
        <h3>Zusammenarbeit mit Auftragsverarbeitern und Dritten</h3>
        <p>
          Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen
          (Auftragsverarbeitern oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die
          Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der
          Daten an Dritte, wie an Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung
          erforderlich ist), Sie eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage
          unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).{' '}
        </p>
        <p>
          Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines sog. „Auftragsverarbeitungsvertrages“
          beauftragen, geschieht dies auf Grundlage des Art. 28 DSGVO.
        </p>
        <h3>Übermittlungen in Drittländer</h3>
        <p>
          Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU) oder des Europäischen
          Wirtschaftsraums (EWR)) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder
          Offenlegung, bzw. Übermittlung von Daten an Dritte geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer
          (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder
          auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder vertraglicher
          Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim Vorliegen der besonderen
          Voraussetzungen der Art. 44 ff. DSGVO verarbeiten. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer
          Garantien, wie der offiziell anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für
          die USA durch das „Privacy Shield“) oder Beachtung offiziell anerkannter spezieller vertraglicher
          Verpflichtungen (so genannte „Standardvertragsklauseln“).
        </p>
        <h3>Rechte der betroffenen Personen</h3>
        <p>
          Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf
          Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend Art. 15 DSGVO.
        </p>
        <p>
          Sie haben entsprechend. Art. 16 DSGVO das Recht, die Vervollständigung der Sie betreffenden Daten oder die
          Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
        </p>
        <p>
          Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht
          werden, bzw. alternativ nach Maßgabe des Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten zu
          verlangen.
        </p>
        <p>
          Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach
          Maßgabe des Art. 20 DSGVO zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.{' '}
        </p>
        <p>
          Sie haben ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde
          einzureichen.
        </p>
        <h3>Widerrufsrecht</h3>
        <p>
          Sie haben das Recht, erteilte Einwilligungen gem. Art. 7 Abs. 3 DSGVO mit Wirkung für die Zukunft zu
          widerrufen
        </p>
        <h3>Widerspruchsrecht</h3>
        <p>
          Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe des Art. 21 DSGVO jederzeit
          widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.
        </p>
        <h3>Cookies und Widerspruchsrecht bei Direktwerbung</h3>
        <p>
          Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der
          Cookies können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem
          Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb
          eines Onlineangebotes zu speichern. Als temporäre Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“,
          werden Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen
          Browser schließt. In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein
          Login-Staus gespeichert werden. Als „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch nach dem
          Schließen des Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer
          diese nach mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen der Nutzer
          gespeichert werden, die für Reichweitenmessung oder Marketingzwecke verwendet werden. Als „Third-Party-Cookie“
          werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt,
          angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht man von „First-Party Cookies“).
        </p>
        <p>
          Wir können temporäre und permanente Cookies einsetzen und klären hierüber im Rahmen unserer
          Datenschutzerklärung auf.
        </p>
        <p>
          Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die
          entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in
          den Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu
          Funktionseinschränkungen dieses Onlineangebotes führen.
        </p>
        <p>
          Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei
          einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite{' '}
          <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a> oder die EU-Seite{' '}
          <a href="http://www.youronlinechoices.com/">http://www.youronlinechoices.com/</a> erklärt werden. Des Weiteren
          kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden.
          Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden
          können.
        </p>
        <h3>Löschung von Daten</h3>
        <p>
          Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht oder in ihrer
          Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden
          die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und
          der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten nicht gelöscht werden,
          weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt.
          D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus
          handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.
        </p>
        <p>
          Nach gesetzlichen Vorgaben in Deutschland erfolgt die Aufbewahrung insbesondere für 6 Jahre gemäß § 257 Abs. 1
          HGB (Handelsbücher, Inventare, Eröffnungsbilanzen, Jahresabschlüsse, Handelsbriefe, Buchungsbelege, etc.)
          sowie für 10 Jahre gemäß § 147 Abs. 1 AO (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handels- und
          Geschäftsbriefe, Für Besteuerung relevante Unterlagen, etc.).{' '}
        </p>
        <p>
          Nach gesetzlichen Vorgaben in Österreich erfolgt die Aufbewahrung insbesondere für 7 J gemäß § 132 Abs. 1 BAO
          (Buchhaltungsunterlagen, Belege/Rechnungen, Konten, Belege, Geschäftspapiere, Aufstellung der Einnahmen und
          Ausgaben, etc.), für 22 Jahre im Zusammenhang mit Grundstücken und für 10 Jahre bei Unterlagen im Zusammenhang
          mit elektronisch erbrachten Leistungen, Telekommunikations-, Rundfunk- und Fernsehleistungen, die an
          Nichtunternehmer in EU-Mitgliedstaaten erbracht werden und für die der Mini-One-Stop-Shop (MOSS) in Anspruch
          genommen wird.
        </p>
        <h3>Hosting</h3>
        <p>
          Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverfügungstellung der folgenden
          Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste,
          Sicherheitsleistungen sowie technische Wartungsleistungen, die wir zum Zwecke des Betriebs dieses
          Onlineangebotes einsetzen.
        </p>
        <p>
          Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten,
          Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden, Interessenten und Besuchern dieses Onlineangebotes
          auf Grundlage unserer berechtigten Interessen an einer effizienten und sicheren Zurverfügungstellung dieses
          Onlineangebotes gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss Auftragsverarbeitungsvertrag).
        </p>
        <h3>Erhebung von Zugriffsdaten und Logfiles</h3>
        <p>
          Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs.
          1 lit. f. DSGVO Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte
          Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des
          Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem
          des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.
        </p>
        <p>
          Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder
          Betrugshandlungen) für die Dauer von maximal 7 Tagen gespeichert und danach gelöscht. Daten, deren weitere
          Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von
          der Löschung ausgenommen.
        </p>
        <h3>Administration, Finanzbuchhaltung, Büroorganisation, Kontaktverwaltung</h3>
        <p>
          Wir verarbeiten Daten im Rahmen von Verwaltungsaufgaben sowie Organisation unseres Betriebs, Finanzbuchhaltung
          und Befolgung der gesetzlichen Pflichten, wie z.B. der Archivierung. Herbei verarbeiten wir dieselben Daten,
          die wir im Rahmen der Erbringung unserer vertraglichen Leistungen verarbeiten. Die Verarbeitungsgrundlagen
          sind Art. 6 Abs. 1 lit. c. DSGVO, Art. 6 Abs. 1 lit. f. DSGVO. Von der Verarbeitung sind Kunden,
          Interessenten, Geschäftspartner und Websitebesucher betroffen. Der Zweck und unser Interesse an der
          Verarbeitung liegt in der Administration, Finanzbuchhaltung, Büroorganisation, Archivierung von Daten, also
          Aufgaben die der Aufrechterhaltung unserer Geschäftstätigkeiten, Wahrnehmung unserer Aufgaben und Erbringung
          unserer Leistungen dienen. Die Löschung der Daten im Hinblick auf vertragliche Leistungen und die vertragliche
          Kommunikation entspricht den, bei diesen Verarbeitungstätigkeiten genannten Angaben.
        </p>
        <p>
          Wir offenbaren oder übermitteln hierbei Daten an die Finanzverwaltung, Berater, wie z.B., Steuerberater oder
          Wirtschaftsprüfer sowie weitere Gebührenstellen und Zahlungsdienstleister.
        </p>
        <p>
          Ferner speichern wir auf Grundlage unserer betriebswirtschaftlichen Interessen Angaben zu Lieferanten,
          Veranstaltern und sonstigen Geschäftspartnern, z.B. zwecks späterer Kontaktaufnahme. Diese mehrheitlich
          unternehmensbezogenen Daten, speichern wir grundsätzlich dauerhaft.
        </p>
        <h3>Kontaktaufnahme</h3>
        <p>
          Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden
          die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b)
          DSGVO verarbeitet. Die Angaben der Nutzer können in einem Customer-Relationship-Management System ("CRM
          System") oder vergleichbarer Anfragenorganisation gespeichert werden.
        </p>
        <p>
          Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle
          zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.
        </p>
        <h3>Google Analytics</h3>
        <p>
          Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und
          wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google Analytics,
          einen Webanalysedienst der Google LLC („Google“) ein. Google verwendet Cookies. Die durch das Cookie erzeugten
          Informationen über Benutzung des Onlineangebotes durch die Nutzer werden in der Regel an einen Server von
          Google in den USA übertragen und dort gespeichert.
        </p>
        <p>
          Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische
          Datenschutzrecht einzuhalten (<a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">
            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
          </a>).
        </p>
        <p>
          Google wird diese Informationen in unserem Auftrag benutzen, um die Nutzung unseres Onlineangebotes durch die
          Nutzer auszuwerten, um Reports über die Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen und um
          weitere, mit der Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen, uns
          gegenüber zu erbringen. Dabei können aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer
          erstellt werden.
        </p>
        <p>
          Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der Nutzer
          wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des
          Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an
          einen Server von Google in den USA übertragen und dort gekürzt.
        </p>
        <p>
          Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von Google
          zusammengeführt. Die Nutzer können die Speicherung der Cookies durch eine entsprechende Einstellung ihrer
          Browser-Software verhindern; die Nutzer können darüber hinaus die Erfassung der durch das Cookie erzeugten und
          auf ihre Nutzung des Onlineangebotes bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch
          Google verhindern, indem sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und
          installieren:{' '}
          <a href="http://tools.google.com/dlpage/gaoptout?hl=de">http://tools.google.com/dlpage/gaoptout?hl=de</a>.
        </p>
        <p>
          Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren Sie
          in der Datenschutzerklärung von Google (<a href="https://policies.google.com/technologies/ads">
            https://policies.google.com/technologies/ads
          </a>) sowie in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google (<a href="https://adssettings.google.com/authenticated">
            https://adssettings.google.com/authenticated
          </a>).
        </p>
        <p>Die personenbezogenen Daten der Nutzer werden nach 14 Monaten gelöscht oder anonymisert.</p>
        <h4>Widerspruch gegen Datenerfassung</h4>
        <p>
          Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken.
          Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website
          verhindert: <a href="javascript:gaOptout();">Google Analytics deaktivieren</a>
        </p>
        <h3>Onlinepräsenzen in sozialen Medien</h3>
        <p>
          Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden,
          Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können. Beim Aufruf
          der jeweiligen Netzwerke und Plattformen gelten die Geschäftsbedingungen und die Datenverarbeitungsrichtlinien
          deren jeweiligen Betreiber.{' '}
        </p>
        <p>
          Soweit nicht anders im Rahmen unserer Datenschutzerklärung angegeben, verarbeiten wir die Daten der Nutzer
          sofern diese mit uns innerhalb der sozialen Netzwerke und Plattformen kommunizieren, z.B. Beiträge auf unseren
          Onlinepräsenzen verfassen oder uns Nachrichten zusenden.
        </p>
        <h3>Einbindung von Diensten und Inhalten Dritter</h3>
        <p>
          Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer berechtigten Interessen (d.h. Interesse an
          der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit.
          f. DSGVO) Inhalts- oder Serviceangebote von Drittanbietern ein, um deren Inhalte und Services, wie z.B. Videos
          oder Schriftarten einzubinden (nachfolgend einheitlich bezeichnet als “Inhalte”).
        </p>
        <p>
          Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie
          ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die
          Darstellung dieser Inhalte erforderlich. Wir bemühen uns nur solche Inhalte zu verwenden, deren jeweilige
          Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner so
          genannte Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für statistische oder
          Marketingzwecke verwenden. Durch die "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den Seiten
          dieser Website ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der
          Nutzer gespeichert werden und unter anderem technische Informationen zum Browser und Betriebssystem,
          verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten, als
          auch mit solchen Informationen aus anderen Quellen verbunden werden.
        </p>
        <h3>SSL-Verschlüsselung</h3>
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
          <a href="https://datenschutz-generator.de/">
            Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke
          </a>
        </p>
      </Container>
    </div>
    <Footer />
  </Layout>
);

export default Datenschutzerklaerung;
