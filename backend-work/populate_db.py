import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app import create_app, db
from app.models import Video, Quiz, Question, Test, LMSContent, Admin
from werkzeug.security import generate_password_hash

def populate_database():
    app = create_app()
    
    with app.app_context():
        print("=" * 50)
        print("Populating Database with Sample Data...")
        print("=" * 50)
        
        # Clear existing data
        print("\n1. Clearing existing data...")
        Video.query.delete()
        Quiz.query.delete()
        Question.query.delete()
        Test.query.delete()
        LMSContent.query.delete()
        db.session.commit()
        print("   [OK] Cleared existing data")
        
        # Add Sample Videos
        print("\n2. Adding sample videos...")
        videos = [
            Video(
                title="Introduction to Python Programming",
                description="Learn the basics of Python programming language",
                video_url="https://www.youtube.com/watch?v=kqtD5dpn9C8"
            ),
            Video(
                title="Mathematics - Algebra Basics",
                description="Understanding algebraic expressions and equations",
                video_url="https://www.youtube.com/watch?v=NybHckSEQBI"
            ),
            Video(
                title="English Grammar - Tenses",
                description="Master all English tenses with examples",
                video_url="https://www.youtube.com/watch?v=2pbnrP_aeQU"
            ),
            Video(
                title="Science - Photosynthesis",
                description="How plants make their own food",
                video_url="https://www.youtube.com/watch?v=UPBMG5EYydo"
            ),
            Video(
                title="History - World War II",
                description="Overview of World War II events",
                video_url="https://www.youtube.com/watch?v=fo2Rb9h788s"
            ),
        ]
        
        for video in videos:
            db.session.add(video)
        db.session.commit()
        print(f"   [OK] Added {len(videos)} videos")
        
        # Add Sample Quizzes with Questions
        print("\n3. Adding sample quizzes...")
        
        # Quiz 1: Python Basics
        quiz1 = Quiz(
            title="Python Programming Basics",
            description="Test your knowledge of Python fundamentals",
            total_marks=100
        )
        db.session.add(quiz1)
        db.session.commit()
        
        questions1 = [
            Question(
                quiz_id=quiz1.id,
                question_text="What is Python?",
                option_a="A snake",
                option_b="A programming language",
                option_c="A database",
                option_d="An operating system",
                correct_option="b"
            ),
            Question(
                quiz_id=quiz1.id,
                question_text="Which keyword is used to define a function in Python?",
                option_a="function",
                option_b="def",
                option_c="func",
                option_d="define",
                correct_option="b"
            ),
            Question(
                quiz_id=quiz1.id,
                question_text="What is the output of print(2 + 3)?",
                option_a="23",
                option_b="5",
                option_c="Error",
                option_d="None",
                correct_option="b"
            ),
            Question(
                quiz_id=quiz1.id,
                question_text="Which data type is used to store text in Python?",
                option_a="int",
                option_b="float",
                option_c="str",
                option_d="bool",
                correct_option="c"
            ),
            Question(
                quiz_id=quiz1.id,
                question_text="What does 'len()' function do?",
                option_a="Returns length of an object",
                option_b="Creates a list",
                option_c="Deletes an item",
                option_d="Sorts a list",
                correct_option="a"
            ),
        ]
        
        for q in questions1:
            db.session.add(q)
        
        # Quiz 2: Mathematics
        quiz2 = Quiz(
            title="Basic Mathematics Quiz",
            description="Test your math skills",
            total_marks=100
        )
        db.session.add(quiz2)
        db.session.commit()
        
        questions2 = [
            Question(
                quiz_id=quiz2.id,
                question_text="What is 5 + 7?",
                option_a="10",
                option_b="11",
                option_c="12",
                option_d="13",
                correct_option="c"
            ),
            Question(
                quiz_id=quiz2.id,
                question_text="What is 15 - 8?",
                option_a="6",
                option_b="7",
                option_c="8",
                option_d="9",
                correct_option="b"
            ),
            Question(
                quiz_id=quiz2.id,
                question_text="What is 6 × 7?",
                option_a="40",
                option_b="41",
                option_c="42",
                option_d="43",
                correct_option="c"
            ),
            Question(
                quiz_id=quiz2.id,
                question_text="What is 20 ÷ 4?",
                option_a="4",
                option_b="5",
                option_c="6",
                option_d="7",
                correct_option="b"
            ),
            Question(
                quiz_id=quiz2.id,
                question_text="What is the square root of 64?",
                option_a="6",
                option_b="7",
                option_c="8",
                option_d="9",
                correct_option="c"
            ),
        ]
        
        for q in questions2:
            db.session.add(q)
        
        # Quiz 3: English
        quiz3 = Quiz(
            title="English Grammar Quiz",
            description="Test your English grammar knowledge",
            total_marks=100
        )
        db.session.add(quiz3)
        db.session.commit()
        
        questions3 = [
            Question(
                quiz_id=quiz3.id,
                question_text="Which is the correct past tense of 'go'?",
                option_a="goed",
                option_b="went",
                option_c="gone",
                option_d="going",
                correct_option="b"
            ),
            Question(
                quiz_id=quiz3.id,
                question_text="What is a noun?",
                option_a="An action word",
                option_b="A describing word",
                option_c="A naming word",
                option_d="A connecting word",
                correct_option="c"
            ),
            Question(
                quiz_id=quiz3.id,
                question_text="Which sentence is correct?",
                option_a="She don't like apples",
                option_b="She doesn't like apples",
                option_c="She doesn't likes apples",
                option_d="She don't likes apples",
                correct_option="b"
            ),
        ]
        
        for q in questions3:
            db.session.add(q)
        
        db.session.commit()
        print(f"   [OK] Added 3 quizzes with questions")
        
        # Add Sample Tests
        print("\n4. Adding sample tests...")
        tests = [
            Test(
                title="Mid-Term Examination",
                description="Comprehensive test covering all subjects",
                max_marks=200
            ),
            Test(
                title="Final Examination",
                description="Year-end comprehensive examination",
                max_marks=300
            ),
        ]
        
        for test in tests:
            db.session.add(test)
        db.session.commit()
        print(f"   [OK] Added {len(tests)} tests")
        
        # Add Sample LMS Content
        print("\n5. Adding sample LMS content...")
        lms_contents = [
            LMSContent(
                title="Course Introduction",
                content="Welcome to our comprehensive learning platform. This course will help you master various subjects.",
                content_type="text"
            ),
            LMSContent(
                title="Study Tips",
                content="1. Create a study schedule\n2. Take regular breaks\n3. Practice regularly\n4. Ask questions when in doubt",
                content_type="text"
            ),
            LMSContent(
                title="Assignment Guidelines",
                content="All assignments must be submitted before the deadline. Late submissions will not be accepted.",
                content_type="announcement"
            ),
        ]
        
        for content in lms_contents:
            db.session.add(content)
        db.session.commit()
        print(f"   [OK] Added {len(lms_contents)} LMS content items")
        
        # Create Admin Account (if not exists)
        print("\n6. Creating admin account...")
        admin = Admin.query.filter_by(email="admin@beelearn.com").first()
        if not admin:
            admin = Admin(
                username="admin",
                email="admin@beelearn.com",
                password_hash=generate_password_hash("Admin@123")
            )
            db.session.add(admin)
            db.session.commit()
            print("   [OK] Admin account created")
            print("   Email: admin@beelearn.com")
            print("   Password: Admin@123")
        else:
            print("   [OK] Admin account already exists")
        
        print("\n" + "=" * 50)
        print("Database Population Complete!")
        print("=" * 50)
        print("\nSummary:")
        print(f"  Videos: {Video.query.count()}")
        print(f"  Quizzes: {Quiz.query.count()}")
        print(f"  Questions: {Question.query.count()}")
        print(f"  Tests: {Test.query.count()}")
        print(f"  LMS Content: {LMSContent.query.count()}")
        print(f"  Admins: {Admin.query.count()}")
        print("\n" + "=" * 50)

if __name__ == "__main__":
    populate_database()
