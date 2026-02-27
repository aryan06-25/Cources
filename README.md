<section class="popular-courses">
  <div class="course-container">
    
    <div class="course-card">
      <img src="course-image.jpg" alt="Web Design">
      <div class="card-content">
        <span class="category">Web Design</span>
        <h3>Web Design & Development</h3>
        <div class="course-info">
          <span>12 Weeks</span>
          <span>150 Students</span>
        </div>
        <div class="card-footer">
          <span class="price">$500.00</span>
          <button class="join-btn">Join Now</button>
        </div>
      </div>
    </div>

    </div>
</section>

/* The Container */
.course-container {
  display: flex;
  justify-content: center; /* Centers cards horizontally */
  gap: 20px;               /* Space between cards */
  padding: 40px;
  flex-wrap: wrap;         /* Allows them to stack on mobile */
}

/* The Card "Box" */
.course-card {
  background: #fff;
  border-radius: 15px;      /* Rounded corners like your image */
  overflow: hidden;         /* Keeps image corners rounded */
  width: 300px;             /* Fixed width for the "box" look */
  box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* Subtle shadow */
  transition: transform 0.3s;
}

.course-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
}

.card-content {
  padding: 20px;
}

/* Pricing and Course Name styling */
h3 {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
}

.price {
  font-weight: bold;
  font-size: 1.1rem;
  color: #6c63ff; /* Purple color matching your design */
}
