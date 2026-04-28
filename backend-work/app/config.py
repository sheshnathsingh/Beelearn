# config.py
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    # Get database URL from environment variable (for Render PostgreSQL)
    # Falls back to SQLite for local development
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///bee_learn_lms.db')
    
    # Fix for Render PostgreSQL URL (postgres:// -> postgresql://)
    if SQLALCHEMY_DATABASE_URI.startswith('postgres://'):
        SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DATABASE_URI.replace('postgres://', 'postgresql://', 1)
    
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ.get('SECRET_KEY', '4d1af60b3132ae555ee9d78760d20251ed90ccbb6eba0474e124bf73e7c41196')