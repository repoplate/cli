"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Path = require("path");
var FileEntry_1 = require("./FileEntry");
var Renderer_1 = require("./Renderer");
var relative = require('relative');
var walk = require('walk');
var Template = (function () {
    function Template(entries) {
        this.entries = entries;
    }
    Template.fromWalk = function (dir) {
        var entries = [];
        walk.walkSync(dir, {
            followLinks: false,
            listeners: {
                file: function (root, fileStats, next) {
                    var path = Path.join(root, fileStats.name);
                    entries.push(new FileEntry_1.FileEntry(path, relative.toBase(dir, path)));
                }
            }
        });
        return new Template(entries);
    };
    Template.prototype.render = function (outDir, data) {
        var renderer = new Renderer_1.Renderer(this.entries, outDir, data);
        renderer.render();
    };
    return Template;
}());
exports.Template = Template;
//# sourceMappingURL=Template.js.map