const sdk = require("node-appwrite");
const admin = require("firebase-admin");

/*
  'req' variable has:
    'headers' - object with request headers
    'payload' - request body data as a string
    'variables' - object with function variables
*/

module.exports = async function (req, res) {
  const client = new sdk.Client();
  
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert({
        type: "service_account",
        project_id: "redmatters-69940",
        private_key_id: "314ba03f1ceded174b08b4aeefeab3b594870b47",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDm2kUu36qIVRX7\nD1GPiA9oact0nkM9YoBtoC5iksrVrio0I6Sni6QG+2ZLFQ3w2vwbQhf7fhSPHnCY\nAoR4PrE4aR6+PS+8UMxC9shC203zT1tn9KRTJSTJi9bBH6UGF095tkDk6DABKESY\n+C+LRihrk5aPFwWuGufY5c17ZKQ+eCSm3Brtcj6sg4JVwl0xU9orzAUab+Z05obA\noY1LaFBd6x1ylvK9m0c13itMRLYJv4EkJGQVHZzlMq2+6zsaPzSG8uMJk1o76vpv\nTJkxQXo30ah+s4O/+hPuj6zWGGIEXsULB30rrBWBo5qQwK3tPzw6wcoDCrv8Sk8J\nEdmb0X51AgMBAAECggEAGKUfsqfdKE3RGWrivax8XJzCxDHrIsADzvBFU2+xaMt9\npPBTMTHWsoofOw/F27s9I9nT/pzQrBDHW2sVYlLrD4claZDVqkiD7fgzm/OWqE2G\nCByVeGzkNwIPTLHIp9RQP0GmPunMyirW2+/O/5LfWNC6R49hI1uq+bxayfwODr8H\n3k3WbMeyeB153A2+YAOgATZW86sMPvqGcpn2ScPAzSgARW4+Vunebmyn9GKIMrV0\nMzRCPLesK/7JBianXPqtvSyyrQlWv6/uCPXOVQuwbkE5WjVn4PWvGKtfqGeP/m1A\nmZU+4Dq+Ukh6Ps5il+Xh3nikgsBHpl+G7/5SCnWGxwKBgQD1AM19KfuAbW2vuo7t\njHNXY7+kMNBxMAI+BaAu01REQ/piTwbO5xZBMVdDVBOQBCv062tDXQl4cAU1Pl7J\nME0KEgLuQv3DHkldyOaWLDaUCGkJjuvKGWeUITPiDuwIFPfQz65rJTpjYqqw6dPL\noKgDUoQgl0BzfvYp09w9dLPEbwKBgQDxNt8mqOB/ItJaJtwwxgJNACC3aRCdbOSG\nTm27yGjXbwl347akCuiST2xF8t5hKQa3nHffR3oj68jnNOlBGSnY8LRSBBwCsEbA\nYkY0YnlBL5YBqH5zefxCgF/4OwbLsWkAiDEnDABbdQ6XUJZMTrtrBa1Hh3WsTPy4\nm9o503OFWwKBgQDDQKmDF2Mk3ZCtnGrtq6H8QjVnX7OukMkorokS6D5ezSINGNff\nKlEVEYJu2OFiQ8DYRonMPKgggH3WCee2RLUQ0nvdcCwWRNvJTyNdCM1SOkWjZXBK\nNubSKYfUn3nBkxxQIELrhta6f9ZyeVbeECH1y9wasQ+fO85oVTxPCeN+JwKBgQCW\nzBIHri3i7VcKCx8+0psfnkPVxbYgZLIdEKzjZ2+7tuv5an+E4FjzFvn+ZM4Hecl8\nQjJigOHn0QDhIh/slZmmyRxB5dXJDIC+xvFS0HkzeldSJA8hjBJbVLwqiGRANWIK\ndhocahFTG8QKbtP3UoUya/MfM50qIVsg4jY0Tm/63wKBgQCTd0I8w9r4hvgAW6s3\nhJV5UFgaawBfrg96AQaBRgHuCwqZQdpPPCiM2PX6khyRo1mh81PMrgJ6UUp9615P\nvcdGzVWFSpDfowwlh6KSy3mtpSB2MgxH2yb7HfG7QveyJ1yMlmQPcqzAMsT2AmJC\nhX8qOo0HxiHRtczHulUyW+PJmQ==\n-----END PRIVATE KEY-----\n",
        client_email:
          "firebase-adminsdk-lekfi@redmatters-69940.iam.gserviceaccount.com",
        client_id: "102187487946497836455",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lekfi%40redmatters-69940.iam.gserviceaccount.com",
        universe_domain: "googleapis.com",
      }),
    });
	}

	const database = new sdk.Databases(client);

	client
		.setEndpoint("https://cloud.appwrite.io/v1")
		.setProject("6489b94aebd49e04665a")
		.setKey(
			"68054b0612e5a9b30d92c156f11c755df9e9a85933b2f812d60061bb77406e11ed9205730fdf431ade3232260051039f013cf06385e77dfcc6136e4d3596a4fc37d03d3d6fb51cca5e9dc3754b56d95ed6b321aae866b9140330e980f8548c424c6050401288bf5f90f464fae5a9fbd725189a77b0db0ed8b54d46c60c2eac55"
		)
		.setSelfSigned(true);

	const tokens = [];

	const response = await database.listDocuments(
		"6489bab012b10cbebe23",
		"648a09afde0d4bfbde7b"
	);

	response.documents.forEach((document) => {
		tokens.push(document.fcmToken);
	});

  await Promise.all(
    tokens.map(async (fcmToken) => {
      await admin
        .messaging()
        .send({
          notification: {
            title: "Emergency Notification!!!",
            body: "Testing testing",
          },
          token: fcmToken,
        })
        .then((response) => {
          console.log("Successfully sent message:", response);
        })
        .catch((error) => {
          console.log("Error sending message:", error);
        });
    })
  );

	res.json({
		areDevelopersAwesome: true,
		fcmTokens: tokens,
	});
};
