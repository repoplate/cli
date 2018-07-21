"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileRenderer_1 = require("./FileRenderer");
var Renderer = (function () {
    function Renderer(fileEntries, outDir, data) {
        this.fileEntries = fileEntries;
        this.outDir = outDir;
        this.data = data;
    }
    Renderer.prototype.render = function () {
        var _this = this;
        this.fileEntries.forEach(function (f) {
            new FileRenderer_1.FileRenderer(f, _this.outDir, _this.data).render();
        });
    };
    return Renderer;
}());
exports.Renderer = Renderer;
//# sourceMappingURL=Renderer.js.map