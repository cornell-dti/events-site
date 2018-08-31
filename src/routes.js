import CreateOrg from "./CreateOrg";
import SelectTags from "./SelectTags";
import VerifyCornellStatus from "./VerifyCornellStatus";
import VerifyOrg from "./VerifyOrg";
import VerifyDone from "./VerifyDone";

export default {
	createOrg: {route: "/createOrg", component: CreateOrg},
	selectTags: {route: "/selectTags", component: SelectTags},
	verifyCornellStatus: {route: "/verifyCornellStatus", component: VerifyCornellStatus},
	verifyOrg: {route: "/verifyOrg", component: VerifyOrg},
	verifyDone: {route: "/verifyDone", component: VerifyDone}
};