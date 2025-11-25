import { processIcons } from './ApplicationCmps/svgIcons';

export function Process() {
    return (
        <section className="process-container">
            <h1 className="title">תהליך העבודה</h1>

            <div className="process-steps">
                <article className="step step-1">
                    <div className="step-number">1</div>
                    <h3 className="step-title">פגישת אפיון</h3>
                    {processIcons.search}
                </article>

                <article className="step step-2">
                    <div className="step-number">2</div>
                    <h3 className="step-title">תכנון הפתרון</h3>
                    {processIcons.pencil}
                </article>

                <article className="step step-3">
                    <div className="step-number">3</div>
                    <h3 className="step-title">פיתוח מערכת</h3>
                    {processIcons.gear}
                </article>

                <article className="step step-4">
                    <div className="step-number">4</div>
                    <h3 className="step-title">בדיקות איכות</h3>
                    {processIcons.clipboard}
                </article>

                <article className="step step-5">
                    <div className="step-number">5</div>
                    <h3 className="step-title">חוות דעת ושיפור</h3>
                    {processIcons.chat}
                </article>

                <article className="step step-6">
                    <div className="step-number">6</div>
                    <h3 className="step-title">השקת הפרויקט</h3>
                    {processIcons.upload}
                </article>
            </div>
        </section>
    )
}