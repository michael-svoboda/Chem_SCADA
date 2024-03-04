import pandas as pd
import psycopg2
import random
import time
import sqlite3
import psycopg2


# Database connection parameters
DB_HOST = "localhost"
DB_PORT = "5432"
DB_NAME = "Capstone"
DB_USER = "postgres"
DB_PASSWORD = "Dav1decek!"


import pandas as pd
import psycopg2

def update_database_from_excel():
    try:
        # Connect to your PostgreSQL database
        conn = psycopg2.connect(
            dbname="Capstone",
            user="postgres",
            password="Dav1decek!",
            host="localhost",
            port="5432"
        )

        # Create a cursor object using the cursor() method
        cursor = conn.cursor()

        # Read data from the Excel file
        data = pd.read_csv("merged_csv-baessaversion-goodstuff.csv")  # Adjust file name if needed

        # Truncate the table to remove existing data
        cursor.execute("TRUNCATE TABLE tableone RESTART IDENTITY;")  # Adjust table name

        # Insert the data into the database
        for row in data.itertuples(index=False):
            cursor.execute("""
                INSERT INTO tableone ("Stream Number", "Stream Name", "Temperature [C]", "Pressure [kPaa]", 
                "Mass Flow [kg/h]", "Molar Flow [kmol/h]", "Vapor Volume Fraction", "Time")
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            """, row)  # Adjust column names and data accordingly

        # Commit the changes
        conn.commit()

        # Close the cursor and connection
        cursor.close()
        conn.close()
        print("Data successfully updated in the database.")

    except (Exception, psycopg2.DatabaseError) as error:
        print("Error while updating data in the database:", error)

# Update the database from the Excel file
update_database_from_excel()

