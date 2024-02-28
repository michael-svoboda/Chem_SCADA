import psycopg2

# Database connection parameters
user = "postgres"
password = "Dav1decek!"
host = "localhost"
port = "5432"
database = "Capstone"  # Replace with your actual database name
table_name = "tableone"  # Replace with your actual table name
schema_name = "public"  # Replace with your actual schema name

# Establish a connection to the default "postgres" database
connection = psycopg2.connect(
    user=user,
    password=password,
    host=host,
    port=port,
    database=database
)

# Create a cursor
cursor = connection.cursor()

try:
    # Print available databases
    cursor.execute("SELECT datname FROM pg_database;")
    databases = cursor.fetchall()

    print("Available databases:")
    for database in databases:
        print(database[0])

except psycopg2.Error as e:
    print("Error:", e)


try:
    # Retrieve table names
    cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
    tables = cursor.fetchall()

    print("Tables in the database:")
    for table in tables:
        print(table[0])

except psycopg2.Error as e:
    print("Error:", e)

try:
    # Retrieve all data from the specified table
    cursor.execute(f"SELECT * FROM {schema_name}.{table_name};")
    table_data = cursor.fetchall()

    # Print the retrieved data
    print(f"Data in table '{table_name}':")
    for row in table_data:
        print(row)

except psycopg2.Error as e:
    print("Error:", e)



finally:
    # Close the cursor and connection
    cursor.close()
    connection.close()



