import { google } from 'googleapis';
export async function getList() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Form responses 1', // sheet name
    });

    const allRows = response.data.values;
    if (allRows.length) {
      const rows = allRows.slice(1, allRows.length);
      return rows.map((row) => ({
        timestamp: row[0],
        name: row[1],
        city: row[2],
        display: row[3]
      }));
    }
  } catch (err) {
    console.log(err);
  }
}