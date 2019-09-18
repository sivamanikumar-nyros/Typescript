class Project < ApplicationRecord
	def self.pagination_request(page)
		paginate :per_page => 100, :page => page
	end
	belongs_to :user
end
