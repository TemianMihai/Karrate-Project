"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedMutationStatus = exports.MutationStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
var MutationStatus;
(function (MutationStatus) {
    MutationStatus[MutationStatus["SUCCESS"] = 0] = "SUCCESS";
    MutationStatus[MutationStatus["FAILED"] = 1] = "FAILED";
})(MutationStatus = exports.MutationStatus || (exports.MutationStatus = {}));
graphql_1.registerEnumType(MutationStatus, {
    name: 'MutationStatus',
});
exports.allowedMutationStatus = {
    SUCCESS: 'success',
    FAILED: 'failed',
};
//# sourceMappingURL=constants.js.map