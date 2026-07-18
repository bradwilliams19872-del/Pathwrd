-- Pathwrd — Database Schema
-- PostgreSQL (Neon serverless). Requires uuid-ossp extension.

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

------------------------------------------------------------
-- Professions
------------------------------------------------------------
CREATE TABLE professions (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug        TEXT UNIQUE NOT NULL,
    name        TEXT NOT NULL,
    description TEXT NOT NULL,
    category    TEXT NOT NULL,          -- e.g. STEM, Healthcare, Legal, Creative
    icon_emoji  TEXT NOT NULL DEFAULT '🎯',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

------------------------------------------------------------
-- Grade levels (ordered)
------------------------------------------------------------
CREATE TABLE grade_levels (
    id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name       TEXT NOT NULL,           -- Pre-K, K, 1, 2, …, 12, Undergraduate, Graduate, PhD/Doctoral
    short_code TEXT NOT NULL UNIQUE,    -- prek, k, 1, 2, …, 12, ugrad, grad, phd
    sort_order INTEGER NOT NULL UNIQUE
);

------------------------------------------------------------
-- Roadmap steps — one row per profession per grade level
------------------------------------------------------------
CREATE TABLE roadmap_steps (
    id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profession_id  UUID NOT NULL REFERENCES professions(id) ON DELETE CASCADE,
    grade_level_id UUID NOT NULL REFERENCES grade_levels(id) ON DELETE CASCADE,
    description    TEXT NOT NULL,       -- narrative summary for this year
    subjects       TEXT[] NOT NULL DEFAULT '{}',   -- recommended subjects
    extracurriculars JSONB NOT NULL DEFAULT '[]',  -- [{name, url, description}]
    supplemental   JSONB NOT NULL DEFAULT '[]',    -- [{name, url, type: book|course|video|article}]
    UNIQUE (profession_id, grade_level_id)
);

CREATE INDEX idx_roadmap_profession ON roadmap_steps(profession_id);

------------------------------------------------------------
-- Professional spotlights
------------------------------------------------------------
CREATE TABLE professionals (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name            TEXT NOT NULL,
    title           TEXT NOT NULL,      -- e.g. "NASA Astronaut"
    profession_id   UUID NOT NULL REFERENCES professions(id) ON DELETE CASCADE,
    bio             TEXT NOT NULL,
    path_background TEXT NOT NULL,      -- their actual career path
    photo_url       TEXT NOT NULL DEFAULT '',
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

------------------------------------------------------------
-- Schools
------------------------------------------------------------
CREATE TABLE schools (
    id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name         TEXT NOT NULL,
    state        TEXT NOT NULL,
    type         TEXT NOT NULL CHECK (type IN ('public', 'private')),
    description  TEXT NOT NULL DEFAULT '',
    ranking_info TEXT NOT NULL DEFAULT '',
    website_url  TEXT NOT NULL DEFAULT ''
);

CREATE INDEX idx_schools_state ON schools(state);

------------------------------------------------------------
-- Profession ↔ School (many-to-many with program info)
------------------------------------------------------------
CREATE TABLE profession_schools (
    profession_id UUID NOT NULL REFERENCES professions(id) ON DELETE CASCADE,
    school_id     UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
    program_name  TEXT NOT NULL DEFAULT '',
    PRIMARY KEY (profession_id, school_id)
);

------------------------------------------------------------
-- Users (authentication)
------------------------------------------------------------
CREATE TABLE users (
    id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email               TEXT UNIQUE NOT NULL,
    password_hash       TEXT NOT NULL,
    name                TEXT,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
    subscription_status TEXT NOT NULL DEFAULT 'free' CHECK (subscription_status IN ('free', 'active', 'canceled')),
    stripe_customer_id  TEXT
);

------------------------------------------------------------
-- Sessions
------------------------------------------------------------
CREATE TABLE sessions (
    id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    token      TEXT UNIQUE NOT NULL,
    user_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    expires_at TIMESTAMPTZ NOT NULL DEFAULT (now() + interval '7 days')
);

CREATE INDEX idx_sessions_token ON sessions(token);
CREATE INDEX idx_sessions_user_id ON sessions(user_id);

------------------------------------------------------------
-- Seed data: grade levels
------------------------------------------------------------
INSERT INTO grade_levels (name, short_code, sort_order) VALUES
    ('Pre-K',          'prek',  1),
    ('Kindergarten',   'k',     2),
    ('1st Grade',      '1',     3),
    ('2nd Grade',      '2',     4),
    ('3rd Grade',      '3',     5),
    ('4th Grade',      '4',     6),
    ('5th Grade',      '5',     7),
    ('6th Grade',      '6',     8),
    ('7th Grade',      '7',     9),
    ('8th Grade',      '8',    10),
    ('9th Grade',      '9',    11),
    ('10th Grade',     '10',   12),
    ('11th Grade',     '11',   13),
    ('12th Grade',     '12',   14),
    ('Undergraduate',  'ugrad',15),
    ('Graduate',       'grad', 16),
    ('PhD / Doctoral', 'phd',  17);
