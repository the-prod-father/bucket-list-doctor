# Project Documentation

## Meeting Notes

All client meeting notes are stored in `/docs/meeting-notes/` and are excluded from git for privacy.

### Structure

Each meeting should have its own date-based folder:

```
docs/meeting-notes/
├── 2025-01-15/
│   ├── transcript.md
│   ├── summary.md
│   └── video.mp4 (or link in summary.md)
├── 2025-01-22/
│   ├── transcript.md
│   ├── summary.md
│   └── video.mp4
```

### File Format

**transcript.md** - Full verbatim transcript from meeting
**summary.md** - Organized notes with:
- Date and attendees
- Key decisions
- Action items / change requests
- Link to video recording (if applicable)
- Priority order

### Workflow

1. Create new folder with meeting date: `docs/meeting-notes/YYYY-MM-DD/`
2. Add transcript.md, summary.md, and video
3. Claude Code will review and create implementation tasks
4. Changes get tracked in git commits (but meeting notes stay private)

## Other Documentation

- `CLAUDE.md` - Project instructions for Claude Code
- `PROJECT_CONTEXT.md` - Client info and brand message
- `TECHNICAL_NOTES.md` - Implementation details
- `SUPABASE_SETUP.md` - Database configuration
- `LAUNCH_CHECKLIST.md` - Pre-deployment checklist
