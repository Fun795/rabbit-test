"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.NotesService = void 0;
var common_1 = require("@nestjs/common");
var note_entity_1 = require("./entities/note.entity");
var typeorm_1 = require("@nestjs/typeorm");
var NotesService = /** @class */ (function () {
    function NotesService(noteRepository) {
        this.noteRepository = noteRepository;
    }
    NotesService.prototype.create = function (createNoteDto) {
        this.noteRepository.create(createNoteDto);
        return 'This action adds a new note';
    };
    NotesService.prototype.findAll = function () {
        return "This action returns all notes";
    };
    NotesService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " note");
    };
    NotesService.prototype.update = function (id, updateNoteDto) {
        return "This action updates a #".concat(id, " note");
    };
    NotesService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " note");
    };
    NotesService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(note_entity_1.NoteEntity))
    ], NotesService);
    return NotesService;
}());
exports.NotesService = NotesService;
