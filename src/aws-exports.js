const awsmobile = {
    //"aws_project_region": "ap-northeast-1", // (optional) Default region for project
    "aws_cognito_region": "ap-southeast-2",
    "aws_user_pools_id": "ap-southeast-2_5kzpFPHZT",
    "aws_user_pools_web_client_id": "2vme59ik7qqp9tbln4mmgrmhpm",
    //"aws_user_pools_web_client_secret": "2mpcmoq04uo981ct9gqfdtca9a9u8knrtgubelag5gdg5ft6i6s",
    "oauth": {
        "domain": "test-domain1.auth.ap-southeast-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://localhost:4200/dashboard",
        "redirectSignOut": "https://localhost:4200/login",
        "responseType": "code"
    }
};
// const awsmobile = {
//     //"aws_project_region": "ap-northeast-1", // (optional) Default region for project
//     "aws_cognito_region": "ap-southeast-2",
//     "aws_user_pools_id": "ap-southeast-2_8Rbr8YYn9",
//     "aws_user_pools_web_client_id": "6caftalf1rllskq4a2np5brkf2",
//     "aws_user_pools_web_client_secret": "2mpcmoq04uo981ct9gqfdtca9a9u8knrtgubelag5gdg5ft6i6s",
//     "oauth": {
//         "domain": "test-domain1.auth.ap-southeast-2.amazoncognito.com",
//         "scope": [
//             "phone",
//             "email",
//             "openid",
//             "profile",
//             "aws.cognito.signin.user.admin"
//         ],
//         "redirectSignIn": "https://localhost:4200/login",
//         "redirectSignOut": "https://localhost:4200/login",
//         "responseType": "code"
//     }
// };


export default awsmobile;