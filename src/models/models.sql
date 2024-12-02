CREATE DATABASE hotel_management_db;

CREATE TABLE
    guests (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        name VARCHAR(255) NOT NULL,
        contact_info JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    rooms (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        room_number VARCHAR(50) NOT NULL,
        room_type VARCHAR(100) NOT NULL,
        price_per_night NUMERIC(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    reservations (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        guest_id UUID NOT NULL,
        room_id UUID NOT NULL,
        check_in_date DATE NOT NULL,
        check_out_date DATE NOT NULL,
        status VARCHAR(50) NOT NULL CHECK (
            status IN (
                'checked_in',
                'checked_out',
                'confirmed',
                'cancelled'
            )
        ),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_guest FOREIGN KEY (guest_id) REFERENCES guests (id) ON DELETE CASCADE,
        CONSTRAINT fk_room FOREIGN KEY (room_id) REFERENCES rooms (id) ON DELETE CASCADE
    );