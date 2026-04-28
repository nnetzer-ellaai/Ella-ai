import Accordion from './Accordion';

export default function Qa() {
  return (
    <div className="flex flex-col px-5 py-[100px] md:px-[4.5rem] md:py-[160px]">
      <h2 className="font-OneZero-Apparat-Medium text-[24px] md:font-Digibank-Regular md:text-[40px] md:mb-[2.75rem]">
        שאלות תשובות
      </h2>
      <Accordion
        details={
          <p>

            שואלים אותי שאלה בשפה חופשית, ממש כמו<br className="md:hidden"/> {" "}
            שמתכתבים בוואטסאפ. אם אני לא מצליחה לענות<br className="md:hidden"/>{" "}
            בפעם <br className="hidden md:block" /> הראשונה, אפשר לכתוב את השאלה בניסוח<br className="md:hidden"/>{" "}
            אחר. ככה גם אוכל להשתפר ולדייק את המענה. <br />
            <br />
            על מה אני יודעת לענות?<br />
            בשלב הראשון, שבו אנחנו נמצאים עכשיו, אני עונה<br className="md:hidden"/>{" "}
            בעיקר על שאלות פיננסיות: ריבית על פיקדונות, איך<br />
            מבצעים העברות מט״ח? איך קונים מניה? איפה<br className="md:hidden"/>{" "}
            מזמינים פנקס צ׳קים? מהי עמלת המשיכה<br className="md:hidden"/>{" "}
            מהכספומט? <br className="hidden md:block" /> אני יודעת לענות לאלפי שאלות. <br className="md:hidden"/>{" "}
            כדאי לנסות.<br />
            <br />
            בשלבים הבאים אני כבר אכיר אותך טוב יותר ויהיה<br className="md:hidden"/>{" "}
            אפשר לשאול אותי שאלות פרסונליות. אני אדע <br className="md:hidden"/>{" "}
            לזהות <br className="hidden md:block" /> את המסלול שלך בבנק, את מועדי החיוב של<br className="md:hidden"/>{" "}
            הכרטיסים, נתונים לגבי תוכנית החסכון ועוד. בעתיד<br className="md:hidden"/>{" "}
            הקרוב אני <br className="hidden md:block" /> גם אוכל לבצע פעולות עבורך במקום<br className="md:hidden"/>{" "}
            מנהלי הכספים.
            <br />

          </p>
        }
        summary={'איך מתכתבים איתי מעכשיו?'}
      />
      <Accordion
        details={
          <p>
            הדרך הכי טובה שבה אני אוכל ללמוד ולהשתפר היא <br className="md:hidden"/>{" "}
            לקבל פידבקים. בעצם כולנו ככה, לא? אם עניתי<br />{" "}
            תשובה שלא ענתה על הציפיות שלך או לא הייתה<br className="md:hidden"/>{" "}
            לשביעות רצונך, ניתן ללחוץ מתחת לתשובה על<br className="md:hidden"/>{" "}
            אייקון <br className="hidden md:block" /> האגודל כלפי מטה  (לשלילה) / אגודל מעלה <br className="md:hidden"/>{" "}
            (לחיוב) ולהוסיף את המשוב בשורת הטקסט.<br />
            <br />
            הפידבקים הללו מאד חשובים לי כדי לגדול ולהתפתח <br className="md:hidden"/>{" "}
            ויש צוות שלם שרק מחכה לקרוא אותם.<br />
            
          </p>
        }
        summary={'איך נותנים לי פידבק?'}
      />

      <Accordion
        details={
          <p>
            כן! אני רב לשונית, ההורים שלי השקיעו בי מגיל צעיר (:<br className="md:hidden"/>{" "}
            ניתן לכתוב לי במגוון שפות והשאלה תתורגם לאנגלית <br className="hidden md:block" /> ואז<br className="md:hidden"/>{" "}
            התשובה תתורגם לעברית בחזרה.<br className="hidden md:block" />{" "}
            <br />
            למענה בשפה האנגלית לוחצים על הסימון התחתון<br className="md:hidden"/>{" "}
            בשורת הטקסט בצ'אט עם האייקון A.<br />{" "}
            כשאני עונה בעברית, הניסוח שלי עדיין לא מושלם,<br className="md:hidden"/>{" "}
            בגלל התרגום. אם עניתי תשובה שצריכה שיפור, <br className="hidden md:block" /> אפשר<br className="md:hidden"/>{" "}
            להשאיר לי פידבק.<br className="md:hidden"/>{" "}
            
          </p>
        }
        summary={'אפשר להתכתב איתי בעוד שפות?'}
      />

      <Accordion
        details={
          <p>
            אני בדרך לשם. כרגע אני יודעת לתת מענה על שאלות <br className="md:hidden"/>{" "}
            פיננסיות, שהן אגב מרבית השאלות ששואלים <br className="hidden md:block" /> היום <br className="md:hidden"/>{" "}
            את מנהלי הכספים. בהמשך אלמד להכיר אותך ולתת<br className="md:hidden"/>{" "}
            מידע פרסונלי על בסיס הפעולות שלך בחשבון.<br className="md:hidden"/>{" "}
          </p>
        }
        summary={
          <>
            האם אני יודעת לתת מענה פרסונלי 
            <br className='md:hidden' /> {" "}
            ולבצע פעולות?
          </>
        }
      />

      <Accordion
        details={
          <p>
            אם זה קורה, אני אציע לך שאלות דומות כדי לנסות<br className="md:hidden"/>{" "}
            להבין למה התכוונת. אם גם השאלות הללו לא יספקו<br />{" "}
            מענה, תמיד ניתן לעבור להתכתבות עם בנקאי אנושי<br className="md:hidden"/>{" "}
            (אני לא נעלבת). לפני שהבנקאי יצטרף לשיחה, אני<br />{" "}
            אסכם את הפנייה, כדי שהטיפול יהיה זריז ומהיר.<br />
            <br />
            פתיחת פניה לבנקאי תפתח חלונית חדשה שניתן<br className="md:hidden"/>{" "}
            לצפות בה תחת הכפתור העליון הימני של מסך<br className="md:hidden"/>{" "}
            הצ'אט. <br className="hidden md:block" /> בזכות פידבקים שקיבלתי עוד בשלב הפיילוט, <br className="md:hidden"/>{" "}
            חילקתי כל פניה לבנקאי לשיחה נפרדת, כדי שלא<br className="md:hidden"/>{" "}
            יהיה <br className="hidden md:block" /> צורך לגלול לאורך היסטורית השיחה. כרגיל,<br className="md:hidden"/>{" "}
            כשבנקאי יצטרף לשיחה תשלח לך הזמנה בהודעת<br className="md:hidden"/>{" "}
            "פוש" <br className="hidden md:block" /> להצטרף לצ׳אט.<br />
            
          </p>
        }
        summary={
          <>
            מה קורה אם אני לא יודעת לענות
            <br className='md:hidden' /> {" "}
            על השאלה שלך?
          </>
          
        }
      />

      <Accordion
        details={
          <p>
            כל המידע הפרטי שלך נשמר באופן<br className="md:hidden"/>{" "}
            בלעדי בתשתיות המאובטחות של הבנק ולא <br className="hidden md:block" /> מבוצע<br className="md:hidden"/>{" "}
            בו שימוש ע״י גורם חיצוני.
          </p>
        }
        summary={'האם המידע שנמצא אצלי מאובטח?'}
      />

      <Accordion
        details={
          <p>
            התהליך מתחיל כאשר אני מבינה את הכוונה מאחורי<br className="md:hidden"/>{" "}
            השאלה, משתמשת במודלים מתקדמים של הבנת<br className="md:hidden"/>{" "}
            שפה <br className="hidden md:block" /> טבעית לפענוח הבקשה. לאחר מכן, אני מחפשת<br className="md:hidden"/>{" "}
            מידע מתאים מתוך מאגרי נתונים ייעודי וסגור של<br className="md:hidden"/>{" "}
            הבנק, תוך <br className="hidden md:block" /> שימוש בטכנולוגיות חיפוש חכמות. <br className="md:hidden"/>{" "}
            במקרים בהם השאלה מוצגת בשפה אחרת, אני<br className="md:hidden"/>{" "}
            מתרגמת את השאלה באופן <br className="hidden md:block" /> אוטומטי, כדי להבטיח <br className="md:hidden"/>{" "}
            הבנה מלאה של הבקשה. לאחר שהמידע הנדרש <br className="md:hidden"/>{" "}
            נמצא, אני כותבת תשובה תוך כדי שימוש <br className="hidden md:block" /> במודלים <br className="md:hidden"/>{" "}
            ג׳נרטיביים לייצור תשובה עשירה ומפורטת. השלב <br className="md:hidden"/>{" "}
            הבא הוא התאמת התשובה לפרופיל האישי שלך, כדי <br />{" "}
            להבטיח שהתשובה לא רק מדויקת אלא גם רלוונטית<br className="md:hidden"/>{" "}
            לצרכים הייחודיים שלך. בטרם מסירת התשובה, אני<br className="md:hidden"/>{" "}
            בודקת <br className="hidden md:block" /> את עצמי פעם נוספת לראות האם התשובה<br className="md:hidden"/>{" "}
            שנתתי עונה לצרכים שלך. לבסוף, אני מציעה פעולות<br className="md:hidden"/>{" "}
            מתאימות <br className="hidden md:block" /> שיכולות להיות רלוונטיות, כגון עצות<br className="md:hidden"/>{" "}
            לקבלת מידע נוסף, תובנות פיננסיות או הפעלת<br className="md:hidden"/>{" "}
            תהליכים בנקאיים <br className="hidden md:block" /> ספציפיים. כל התהליך הזה לוקח לי<br className="md:hidden"/>{" "}
            שניות בודדות.<br />
            
          </p>
        }
        summary={'איך אני יודעת לענות על שאלות?'}
      />
      
    </div>
  );
}
