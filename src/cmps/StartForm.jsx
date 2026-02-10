import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { appHeaderIcons } from "./ApplicationCmps/svgIcons"

export function StartForm() {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [notification, setNotification] = useState({ show: false, message: "", type: "" })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const payload = {
            name: e.target.fullName.value.trim(),
            email: e.target.email.value.trim(),
            phone: e.target.phone.value.trim(),
            systemGoal: e.target.systemGoal.value.trim(),
            targetUsers: e.target.targetUsers.value,
            mainAction: e.target.mainAction.value.trim(),
            features: Array.from(e.target.querySelectorAll('input[name="features"]:checked')).map(cb => cb.value),
            otherFeatures: e.target.otherFeatures?.value.trim() || "",
            platform: e.target.platform.value,
            designReference: e.target.designReference.value.trim(),
            desiredDate: e.target.desiredDate.value,
            budget: e.target.budget.value.trim()
        }

        try {
            const res = await fetch("https://api.primedev.co.il/start", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            })

            const data = await res.json().catch(() => ({}))

            if (res.ok && data?.ok) {
                setNotification({
                    show: true,
                    message: "הטופס נשלח בהצלחה! נחזור אליך תוך יום עסקים אחד.",
                    type: "success"
                })
                e.target.reset()
            } else {
                throw new Error(data?.error || "Failed to send")
            }
        } catch (err) {
            console.error("Error sending start form: ", err)
            setNotification({
                show: true,
                message: "שגיאה בשליחת הטופס. נסו שוב או צרו קשר ישירות.",
                type: "error"
            })
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setNotification({ show: false, message: "", type: "" }), 5000)
        }
    }

    return (
        <div className="start-form-page">
            <div className="start-form-content">
                <header className="start-form-header">
                    <div className="eyebrow" aria-label="PrimeDev branding">
                        <button
                            className="brand-mark"
                            onClick={() => navigate("/")}
                            aria-label="חזרה לדף הבית"
                            type="button"
                        >
                            {appHeaderIcons.appLogo}
                        </button>
                    </div>
                    <h1>שאלון אפיון פרויקט</h1>
                    <p className="subtitle">
                        היי! כאן צוות PrimeDev. כדי שנוכל לתת לכם הצעת מחיר מדויקת ולתכנן את הפתרון הטכנולוגי המושלם, נשמח אם תענו על כמה שאלות קצרות. אל דאגה, אין כאן מושגים מסובכים.
                    </p>
                </header>

                <div className="start-form-grid">
                    <div className="start-form-intro">
                        <div className="intro-card">
                            <h2>מה קורה אחרי השליחה?</h2>
                            <ul className="info-list">
                                <li>חוזרים אליכם עד יום עסקים אחד</li>
                                <li>מחדדים מטרות, סקופ ויעדים טכניים</li>
                                <li>מקבלים הצעת מחיר מדויקת</li>
                            </ul>
                        </div>

                        <div className="intro-card">
                            <h3>שירותים זמינים</h3>
                            <div className="pill-list" role="list">
                                <span role="listitem">Web</span>
                                <span role="listitem">Full-Stack</span>
                                <span role="listitem">DevOps</span>
                                <span role="listitem">SOAR</span>
                                <span role="listitem">MVP</span>
                            </div>
                            <p className="fine-print">
                                לא בטוחים מה מתאים? בחרו "אחר" ונבין יחד.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="back-link"
                            onClick={() => navigate("/")}
                            aria-label="חזרה לדף הבית"
                        >
                            חזרה לדף הבית
                        </button>
                    </div>

                    <div className="start-form-card" aria-live="polite">
                        {notification.show && (
                            <div className={`notification ${notification.type}`} role="alert">
                                {notification.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} aria-label="טופס התחלת פרויקט">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fullName">שם מלא</label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="איך נקרא לך?"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">אימייל</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="name@email.com"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">טלפון</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="050-000-0000"
                                    required
                                    aria-required="true"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="systemGoal">במשפט אחד – מה המערכת שלכם הולכת לעשות?</label>
                                <input
                                    id="systemGoal"
                                    name="systemGoal"
                                    type="text"
                                    placeholder="למשל: מערכת הזמנות לעסק שלי"
                                    required
                                    aria-required="true"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="targetUsers">מי הולך להשתמש במוצר?</label>
                                <select id="targetUsers" name="targetUsers" required aria-required="true" defaultValue="">
                                    <option value="" disabled>בחרו אפשרות</option>
                                    <option value="private">לקוחות פרטיים</option>
                                    <option value="business">חברות ועסקים</option>
                                    <option value="internal">עובדים בתוך הארגון</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="mainAction">תארו לנו את הפעולה הכי חשובה שהמשתמש עושה (למשל: הלקוח מזמין חבילת נופש ומשלם)</label>
                                <textarea
                                    id="mainAction"
                                    name="mainAction"
                                    rows="4"
                                    placeholder="תארו את הפעולה המרכזית במערכת"
                                    required
                                    aria-required="true"
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label>אילו תכונות נרצה שיהיו במערכת? (סמנו את כל מה שרלוונטי)</label>
                                <div className="checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="features" value="user-registration" />
                                        <span>רישום משתמשים (דרך גוגל או מייל)</span>
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="features" value="payments" />
                                        <span>מלקיח אישי ותשלומים</span>
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="features" value="notifications" />
                                        <span>שליחת הודעות (ווצאפ, SMS או מייל)</span>
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="features" value="dashboard" />
                                        <span>דשבורד לניהול נתונים עבורכם</span>
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="features" value="chat" />
                                        <span>צ'אט או מערכת הודעות פנימית</span>
                                    </label>
                                    <div className="other-features">
                                        <input
                                            type="text"
                                            name="otherFeatures"
                                            placeholder="תכונות נוספות (אופציונלי)"
                                            className="other-features-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="platform">איפה המשתמשים יגעשו אתכם?</label>
                                <select id="platform" name="platform" required aria-required="true" defaultValue="">
                                    <option value="" disabled>בחרו אפשרות</option>
                                    <option value="website">אתר אינטרנט</option>
                                    <option value="mobile">אפליקציה למובייל</option>
                                    <option value="both">גם וגם</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="designReference">האם יש אתר או אפליקציה שאתם אוהבים את המראה שלהם? (אפשר לשים לינק)</label>
                                <textarea
                                    id="designReference"
                                    name="designReference"
                                    rows="3"
                                    placeholder="הוסיפו קישור או תארו את העיצוב שאתם אוהבים"
                                ></textarea>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="desiredDate">מתי תרצו לראות את הגרסה הראשונה שלכם באוויר?</label>
                                    <input
                                        id="desiredDate"
                                        name="desiredDate"
                                        type="date"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="budget">מה התקציב המשוער שהקצבתם לפיתוח הגרסה הראשונה? (זה עוזר לנו להציע פתרונות שמתאימים לכיס שלכם)</label>
                                    <input
                                        id="budget"
                                        name="budget"
                                        type="text"
                                        placeholder="לדוגמה: 20,000 ש״ח"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </div>

                            <div className="start-form-actions">
                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={isSubmitting}
                                    aria-label={isSubmitting ? "שולח טופס..." : "שליחת טופס"}
                                >
                                    {isSubmitting ? "שולח..." : "שליחת טופס"}
                                </button>
                                <span className="helper-text">אנחנו לא משתפים את הפרטים שלך עם צדדים שלישיים.</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
