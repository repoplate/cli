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
var fast_memoize_decorator_1 = require("@typescript-plus/fast-memoize-decorator");
var fs = require("fs-extra");
var Handlebars = require("handlebars");
var Path = require("path");
function renderNonTemplate(sourcePath, outPath, data) {
    fs.mkdirpSync(Path.dirname(outPath));
    fs.copyFileSync(sourcePath, outPath);
}
function renderHandlebars(sourcePath, outPath, data) {
    fs.mkdirpSync(Path.dirname(outPath));
    fs.writeFileSync(outPath, Handlebars.compile(fs.readFileSync(sourcePath).toString())(data));
}
var FileRenderer = (function () {
    function FileRenderer(fileEntry, outBaseDir, data) {
        this.fileEntry = fileEntry;
        this.outBaseDir = outBaseDir;
        this.data = data;
        if (fileEntry.localPath.endsWith('.handlebars')) {
            this.outLocalPath = fileEntry.localPath.slice(0, -11);
            this.renderer = renderHandlebars;
        }
        else {
            this.outLocalPath = fileEntry.localPath;
            this.renderer = renderNonTemplate;
        }
        this.outLocalPath = Handlebars.compile(this.outLocalPath)(data);
    }
    Object.defineProperty(FileRenderer.prototype, "outPath", {
        get: function () {
            return Path.join(this.outBaseDir, this.outLocalPath);
        },
        enumerable: true,
        configurable: true
    });
    FileRenderer.prototype.render = function () {
        this.renderer(this.fileEntry.sourcePath, this.outPath, this.data);
    };
    __decorate([
        fast_memoize_decorator_1.Memoize(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FileRenderer.prototype, "outPath", null);
    return FileRenderer;
}());
exports.FileRenderer = FileRenderer;
//# sourceMappingURL=FileRenderer.js.map