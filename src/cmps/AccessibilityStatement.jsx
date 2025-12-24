import { useNavigate } from 'react-router-dom'
import '../assets/styles/cmps/AccessibilityStatement.css'

export function AccessibilityStatement() {
    const navigate = useNavigate()

    return (
        <div className="accessibility-statement-container">
            <div className="accessibility-content">
                <h1>הצהרת נגישות</h1>

                <p><strong>PrimeDev</strong> מחויבת להנגיש את האתר שלה בהתאם לתקן הישראלי (ת"י 5568) ולחוק שוויון זכויות לאנשים עם מוגבלות.</p>

                <h2>רמת הנגישות</h2>
                <p>האתר תוכנן ונבנה על פי עקרונות הנגישות הבינלאומיים <strong>WCAG 2.1</strong> ברמה <strong>AA</strong>, ובהתאם לתקן הישראלי <strong>ת"י 5568</strong>.</p>

                <h2>התאמות נגישות באתר</h2>
                <ul>
                    <li><strong>ניווט מקלדת:</strong> ניתן לנווט באתר באמצעות מקלדת בלבד (Tab, Shift+Tab, Enter, מקשי חצים)</li>
                    <li><strong>תמיכה בקוראי מסך:</strong> כל התוכן מסומן עם תגיות ARIA מתאימות ותיאורים נגישים</li>
                    <li><strong>דילוג לתוכן ראשי:</strong> קישור "דלג לתוכן הראשי" מופיע בלחיצה על Tab</li>
                    <li><strong>ניגודיות צבעים:</strong> כל הטקסטים עומדים ביחס ניגודיות מינימלי של 4.5:1</li>
                    <li><strong>גופן וגודל טקסט:</strong> ניתן להגדיל טקסט עד 200% ללא אובדן תוכן</li>
                    <li><strong>תוויות לטפסים:</strong> כל שדות הטופס מסומנים בתוויות ברורות</li>
                    <li><strong>הודעות שגיאה:</strong> הודעות שגיאה מוצגות בצורה ברורה ונגישה</li>
                    <li><strong>תמונות:</strong> כל התמונות כוללות טקסט חלופי (Alt text)</li>
                    <li><strong>קישורים חיצוניים:</strong> מסומנים בבירור עם הודעה לקורא מסך</li>
                    <li><strong>תמיכה בתנועה מופחתת:</strong> אנימציות מופחתות למשתמשים שביקשו זאת</li>
                </ul>

                <h2>טכנולוגיות מסייעות נתמכות</h2>
                <ul>
                    <li>NVDA (Windows)</li>
                    <li>JAWS (Windows)</li>
                    <li>VoiceOver (Mac, iOS)</li>
                    <li>TalkBack (Android)</li>
                    <li>Narrator (Windows)</li>
                </ul>

                <h2>דפדפנים נתמכים</h2>
                <ul>
                    <li>Google Chrome (גרסה אחרונה)</li>
                    <li>Mozilla Firefox (גרסה אחרונה)</li>
                    <li>Microsoft Edge (גרסה אחרונה)</li>
                    <li>Safari (גרסה אחרונה)</li>
                </ul>

                <h2>מגבלות ידועות</h2>
                <p>אנו עובדים באופן שוטף לשיפור נגישות האתר. אם נתקלתם בבעיית נגישות, אנא דווחו לנו.</p>

                <h2>משוב ויצירת קשר</h2>
                <div className="contact-info">
                    <p>אם נתקלתם בבעיית נגישות או שיש לכם הצעות לשיפור, נשמח לשמוע מכם:</p>
                    <ul>
                        <li><strong>אימייל:</strong> <a href="mailto:contact@primedev.co.il">contact@primedev.co.il</a></li>
                        <li><strong>טלפון:</strong> <a href="tel:+972522613894" dir="ltr">050-330-2036</a></li>
                        <li><strong>WhatsApp:</strong> <a href="https://wa.me/972522613894" target="_blank" rel="noopener noreferrer">שלחו הודעה</a></li>
                    </ul>
                    <p>אנו מתחייבים לטפל בכל פנייה בנושא נגישות תוך <strong>5 ימי עבודה</strong>.</p>
                </div>

                <h2>תאריך עדכון אחרון</h2>
                <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך: <strong>12 בדצמבר 2025</strong></p>

                <button
                    className="back-button"
                    onClick={() => navigate('/')}
                    aria-label="חזרה לדף הבית"
                >
                    חזרה לדף הבית
                </button>
            </div>
        </div>
    )
}
