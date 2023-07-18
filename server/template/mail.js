export default function getContactMailTemplate({
  userName,
  email,
  itemName,
  itemDescription,
  itemType,
}) {
  return `
    <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Enquiry</title>
  </head>

  <body style="padding:0; margin:0; box-sizing: border-box;">

      <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif">
          <tr>
              <td>
                  <table style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto; padding: 0 0 20px 0;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                      <!-- Logo-->
                      <tr>
                          <td style="text-align: center">
                              <h1 style="text-decoration: none; font-size: 5rem; font-weight: 600; color: #000000;">URBAN GUIDE</h1>
                          </td>
                      </tr>
                      <tr>
                          <td style="height: 20px">&nbsp;</td>
                      </tr>
                      <!-- Email Content-->
                      <tr>
                          <td>
                              <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width: 670px; background: #fff; border-radius: 3px; -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); padding: 0 40px">
                                  <tr>
                                      <td style="height: 40px">&nbsp;</td>
                                  </tr>
                                  <!-- Title-->
                                  <tr>
                                      <td style="padding: 0 15px; text-align: center">
                                          <h1 style="color: #1e1e2d; font-weight: 400; margin: 0; font-size: 32px; font-family: 'Rubik', sans-serif">Contact Form Notification</h1><span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece;width:100px;"></span>
                                      </td>
                                  </tr>
                                  <!-- Details Table-->
                                  <tr>
                                      <td>
                                          <table cellpadding="0" cellspacing="0" style="width: 100%; border: 1px solid #ededed">
                                              <tbody>
                                                  <tr>
                                                      <td style="padding: 20px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight: 600; color: rgba(0, 0, 0, 0.64)">From:</td>
                                                      <td style="padding: 20px; border-bottom: 1px solid #ededed; color: #455056">${email}</td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 20px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight: 600; color: rgba(0, 0, 0, 0.64)">Username:</td>
                                                      <td style="padding: 20px; border-bottom: 1px solid #ededed; color: #455056">${userName}</td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 20px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight: 600; color: rgba(0, 0, 0, 0.64)">Destination name:</td>
                                                      <td style="padding: 20px; border-bottom: 1px solid #ededed; color: #455056">${itemName}</td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 20px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight: 600; color: rgba(0, 0, 0, 0.64)">Destination Type:</td>
                                                      <td style="padding: 20px; border-bottom: 1px solid #ededed; color: #455056">${itemType}</td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 20px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight: 600; color: rgba(0, 0, 0, 0.64)">Destination Description:</td>
                                                      <td style="padding: 20px; border-bottom: 1px solid #ededed; color: #455056">${itemDescription}</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="height: 40px">&nbsp;</td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td style="height: 20px">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="text-align: center">
                              <p style="font-size: 14px; color: #455056bd; line-height: 18px; margin: 0 0 0">&copy;<strong>URBAN GUIDE</strong></p>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </body>

  </html>
    `;
}
