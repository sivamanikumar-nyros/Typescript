class User < ApplicationRecord
	has_secure_password
	validates_uniqueness_of :email

	def self.pagination_request(page)
		paginate :per_page => 100, :page => page
	end
	has_many :projects
end