import { useState } from 'react';
import { Search, Book, FileText, Briefcase, User, Menu, X, ChevronRight } from 'lucide-react';

export default function LearningPlatform() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('courses');
  
  const courses = [
    { id: 1, title: "Web Development Fundamentals", type: "Video", duration: "8 weeks", enrolled: 2453 },
    { id: 2, title: "Advanced React Patterns", type: "Text & Video", duration: "6 weeks", enrolled: 1874 },
    { id: 3, title: "Data Structures & Algorithms", type: "Video", duration: "10 weeks", enrolled: 3267 }
  ];
  
  const jobs = [
    { id: 1, title: "Senior Frontend Developer", company: "TechCorp", location: "Mumbai", type: "Remote" },
    { id: 2, title: "Full Stack Engineer", company: "InnovateTech", location: "Bangalore", type: "Hybrid" },
    { id: 3, title: "UX Designer", company: "DesignStudio", location: "Delhi", type: "On-site" }
  ];
  
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Book className="h-8 w-8" />
            <span className="text-xl font-bold">CareerLearn</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-300">Courses</a>
            <a href="#" className="hover:text-gray-300">Quizzes</a>
            <a href="#" className="hover:text-gray-300">Resume Builder</a>
            <a href="#" className="hover:text-gray-300">Jobs</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">
              Login
            </button>
            <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a href="#" className="py-2">Courses</a>
              <a href="#" className="py-2">Quizzes</a>
              <a href="#" className="py-2">Resume Builder</a>
              <a href="#" className="py-2">Jobs</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="border border-white px-4 py-2 rounded">
                  Login
                </button>
                <button className="bg-white text-black px-4 py-2 rounded">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Your Career. Learn. Apply.</h1>
            <p className="text-lg md:text-xl mb-8">Courses, quizzes, resume building, and job applications - all in one platform.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200 transition">
                Explore Courses
              </button>
              <button className="border border-white px-6 py-3 rounded font-medium hover:bg-white hover:text-black transition">
                Find Jobs
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Bar */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for courses, quizzes or jobs..."
              className="w-full px-4 py-3 pl-12 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Search className="absolute left-4 top-3 text-gray-400" />
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'courses' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('courses')}
          >
            Courses
          </button>
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'quizzes' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('quizzes')}
          >
            Quizzes
          </button>
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'resume' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('resume')}
          >
            Resume Builder
          </button>
          <button 
            className={`py-2 px-4 font-medium ${activeTab === 'jobs' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('jobs')}
          >
            Jobs
          </button>
        </div>
        
        {/* Dynamic Content */}
        {activeTab === 'courses' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Popular Courses</h2>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded px-3 py-1">
                  <option>All Categories</option>
                  <option>Technology</option>
                  <option>Business</option>
                  <option>Design</option>
                </select>
                <select className="border border-gray-300 rounded px-3 py-1">
                  <option>Sort By</option>
                  <option>Popularity</option>
                  <option>Newest</option>
                  <option>Price</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="bg-gray-200 h-40"></div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-black text-white text-xs px-2 py-1 rounded">{course.type}</span>
                      <span className="text-gray-500 text-sm">{course.duration}</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">{course.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{course.enrolled.toLocaleString()} enrolled</span>
                      <button className="text-black font-medium flex items-center">
                        View <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="border border-black px-6 py-2 rounded font-medium hover:bg-black hover:text-white transition">
                View All Courses
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'jobs' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Jobs</h2>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded px-3 py-1">
                  <option>All Locations</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                </select>
                <select className="border border-gray-300 rounded px-3 py-1">
                  <option>All Types</option>
                  <option>Remote</option>
                  <option>On-site</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              {jobs.map(job => (
                <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{job.type}</span>
                      <p className="text-gray-500 mt-1">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <span className="text-gray-500 text-sm">Posted 2 days ago</span>
                    <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="border border-black px-6 py-2 rounded font-medium hover:bg-black hover:text-white transition">
                Browse All Jobs
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'quizzes' && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-medium mb-2">Test Your Knowledge</h3>
              <p className="text-gray-500 mb-6">Take quizzes to assess your understanding of course materials and prepare for certifications.</p>
              <button className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition">
                Browse Quizzes
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'resume' && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-medium mb-2">Create Your Professional Resume</h3>
              <p className="text-gray-500 mb-6">Build and download your resume in PDF format to apply for your dream jobs.</p>
              <button className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition">
                Build Resume
              </button>
            </div>
          </div>
        )}
      </main>
      
      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Succeed</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <Book className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-medium mb-2">Learn Anything</h3>
              <p className="text-gray-600">Access high-quality courses with video and text-based learning materials.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-medium mb-2">Test Knowledge</h3>
              <p className="text-gray-600">Reinforce your learning with interactive MCQ quizzes and assessments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <User className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-medium mb-2">Build Resume</h3>
              <p className="text-gray-600">Create professional resumes and download them as PDFs with our builder.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-medium mb-2">Find Jobs</h3>
              <p className="text-gray-600">Apply to relevant positions filtered by location and requirements.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Book className="h-6 w-6" />
                <span className="text-lg font-bold">CareerLearn</span>
              </div>
              <p className="text-gray-400">Your complete platform for learning and career growth.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Quizzes</a></li>
                <li><a href="#" className="hover:text-white">Resume Builder</a></li>
                <li><a href="#" className="hover:text-white">Job Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 CareerLearn. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}