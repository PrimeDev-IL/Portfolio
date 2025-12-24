import { processIcons } from './ApplicationCmps/svgIcons';

export function Process() {
    return (
        <section className="process-container" aria-labelledby="process-title">
            <h1 id="process-title" className="title">תהליך העבודה</h1>

            <div className="process-steps" role="list">
                <article className="step step-1" role="listitem">
                    <div className="step-number" aria-label="שלב 1">1</div>
                    <h3 className="step-title">פגישת אפיון</h3>
                    <span aria-hidden="true">{processIcons.search}</span>
                </article>

                <article className="step step-2" role="listitem">
                    <div className="step-number" aria-label="שלב 2">2</div>
                    <h3 className="step-title">תכנון הפתרון</h3>
                    <span aria-hidden="true">{processIcons.pencil}</span>
                </article>

                <article className="step step-3" role="listitem">
                    <div className="step-number" aria-label="שלב 3">3</div>
                    <h3 className="step-title">פיתוח מערכת</h3>
                    <span aria-hidden="true">{processIcons.gear}</span>
                </article>

                <article className="step step-4" role="listitem">
                    <div className="step-number" aria-label="שלב 4">4</div>
                    <h3 className="step-title">בדיקות איכות</h3>
                    <span aria-hidden="true">{processIcons.clipboard}</span>
                </article>

                <article className="step step-5" role="listitem">
                    <div className="step-number" aria-label="שלב 5">5</div>
                    <h3 className="step-title">חוות דעת ושיפור</h3>
                    <span aria-hidden="true">{processIcons.chat}</span>
                </article>

                <article className="step step-6" role="listitem">
                    <div className="step-number" aria-label="שלב 6">6</div>
                    <h3 className="step-title">השקת הפרויקט</h3>
                    <span aria-hidden="true">{processIcons.upload}</span>
                </article>
            </div>
        </section>
    )
}