"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var framework_1 = require("@typecli/framework");
var fast_memoize_decorator_1 = require("@typescript-plus/fast-memoize-decorator");
var Template_1 = require("../Template");
var RepoplateCommand = (function () {
    function RepoplateCommand() {
    }
    Object.defineProperty(RepoplateCommand.prototype, "data", {
        get: function () {
            var json = this.dataJson;
            if (json === undefined) {
                json = '{}';
            }
            return JSON.parse(json);
        },
        enumerable: true,
        configurable: true
    });
    RepoplateCommand.prototype.run = function () {
        var template = Template_1.Template.fromWalk(this.templateDir);
        template.render(this.outDir, this.data);
    };
    __decorate([
        framework_1.Argument({
            required: true
        }),
        __metadata("design:type", String)
    ], RepoplateCommand.prototype, "templateDir", void 0);
    __decorate([
        framework_1.Argument({
            required: true
        }),
        __metadata("design:type", String)
    ], RepoplateCommand.prototype, "outDir", void 0);
    __decorate([
        framework_1.Argument(),
        __metadata("design:type", String)
    ], RepoplateCommand.prototype, "dataJson", void 0);
    __decorate([
        fast_memoize_decorator_1.Memoize(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], RepoplateCommand.prototype, "data", null);
    __decorate([
        framework_1.Run(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RepoplateCommand.prototype, "run", null);
    return RepoplateCommand;
}());
function main(args) {
    framework_1.runSync(RepoplateCommand, args);
}
exports.main = main;
//# sourceMappingURL=repoplate.js.map